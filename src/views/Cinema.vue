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
import CinemaItem from './cinema/components/CinemaItem.vue'
import CinemaHeader from './cinema/components/CinemaHeader.vue'
import { convertCinemas, filterCinemas } from '@/features/cinema/utils'
import { CinameData, CinemaFilter, TicketFlag } from '@/features/cinema'

export default Vue.extend({
  components: { CinemaHeader, CinemaItem },
  name: 'CinemaBar',
  data () :CinameData {
    return {
      filter: {
        districtId: 0,
        ticketFlag: TicketFlag.APP
      },
      cinemas: []
    }
  },
  created () {
    this.loadCinemaList()
  },

  methods: {
    async loadCinemaList () {
      try {
        console.log('this.filter.ticketFlags', this.filter)
        const { data } = await cinemaApi.cinemaList(this.filter.ticketFlag)
        const cinemas = filterCinemas(convertCinemas(data.cinemas), this.filter.districtId)

        this.cinemas = cinemas
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
