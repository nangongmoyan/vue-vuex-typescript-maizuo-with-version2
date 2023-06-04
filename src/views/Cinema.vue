<template>
  <div class="cinema-main">
    <cinema-header @changFilter="changFilter"/>
    <div>
      <van-cell v-for="cinema in cinemas" :key="cinema.cinemaId"  >
        <cinema-item :cinema="cinema"/>
      </van-cell>
    </div>
  </div>
</template>

<script lang="ts">
import { cinemaApi } from '@/services/api'
import Vue from 'vue'
import CinemaItem from './cinema/CinemaItem.vue'
import CinemaHeader from './cinema/CinemaHeader.vue'
import { convertCinemas, filterCinemas } from '@/features/cinema/utils'
import { CinameData, CinemaFilter, CinemaSort, TicketFlag } from '@/features/cinema'

export default Vue.extend({
  components: { CinemaHeader, CinemaItem },
  name: 'CinemaBar',
  data () :CinameData {
    return {
      filter: {
        districtId: 0,
        sort: CinemaSort.NotSorted,
        ticketFlag: TicketFlag.APP
      },
      preFilter: {
        districtId: 0,
        sort: CinemaSort.NotSorted,
        ticketFlag: TicketFlag.APP
      },
      cinemas: [],
      originCinemas: []
    }
  },
  created () {
    this.loadCinemaList()
  },

  methods: {
    async loadCinemaList () {
      try {
        if (this.filter.ticketFlag === this.preFilter.ticketFlag && this.originCinemas.length > 0) {
          this.cinemas = filterCinemas(this.originCinemas, this.filter)
        } else {
          const { data } = await cinemaApi.cinemaList(this.filter.ticketFlag)
          this.originCinemas = convertCinemas(data.cinemas)
          this.cinemas = filterCinemas(this.originCinemas, this.filter)
        }
        this.preFilter = this.filter
      } catch (error) {
        console.log('CinemaBar-loadCinemaList' + error)
      }
    },
    changFilter (filter:CinemaFilter) {
      this.filter = filter
      this.loadCinemaList()
    }
  }
})

</script>

<style lang="scss" scoped>
  .cinema-main{
    background: #f4f4f4;
  }
</style>
