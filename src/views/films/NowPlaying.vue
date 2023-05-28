<template>
  <ul >
    <now-playing-item v-for="film in films" :key="film.filmId" :film="film"/>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'
import { filmApi } from '@/services/api'
import { NowPlayingData } from '@/features/nowPlaying'
import NowPlayingItem from './components/NowPlayingItem.vue'
export default Vue.extend({
  name: 'NowPlaying',
  components: {
    NowPlayingItem
  },
  data () :NowPlayingData {
    return {
      films: []
    }
  },
  created () {
    this.loadNowPlayingFilms()
  },
  methods: {
    async loadNowPlayingFilms () {
      try {
        const { data } = await filmApi.nowPalyingFilms()
        this.films = data.films
      } catch (error) {
        console.log('NowPlaying-loadNowPlayingFilms' + error)
      }
    }
  }
})

</script>

<style lang="scss" scoped>

</style>
