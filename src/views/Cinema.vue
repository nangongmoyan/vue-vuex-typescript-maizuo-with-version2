<template>
  <div class="cinema-main">
    <cinema-nav-bar/>
    <div class="cinema-content">
      <ul>
        <cinema-item v-for="cinema in cinemas" :key="cinema.cinemaId" :cinema="cinema"/>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { CinemaList } from '@/features/cinema'
import { cinemaApi } from '@/services/api'
import Vue from 'vue'
import CinemaItem from './cinema/components/CinemaItem.vue'
import CinemaNavBar from './cinema/components/CinemaNavBar.vue'
import BetterScroll from 'better-scroll'
import { convertCinemas } from '@/features/cinema/utils/convertCinemas'
export default Vue.extend({
  components: { CinemaNavBar, CinemaItem },
  name: 'CinemaBar',
  data () :CinemaList {
    return {
      cinemas: []
    }
  },
  created () {
    this.loadCinemaList()
  },

  methods: {
    async loadCinemaList () {
      try {
        const { data } = await cinemaApi.cinemaList()
        this.cinemas = convertCinemas(data.cinemas)
        this.$nextTick(() => {
          new BetterScroll('.cinema-content', {
            scrollbar: { fade: true }
          })
        })
      } catch (error) {
        console.log('CinemaBar-loadCinemaList' + error)
      }
    }
  }
})

</script>

<style lang="scss" scoped>
  .cinema-main{
    background: #f4f4f4;
  }
  .cinema-content{
    overflow: hidden;
    position: relative;
    padding-top: 5.875rem;
    height:calc(100vh - 9rem);
  }
</style>
