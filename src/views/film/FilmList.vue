<template>

    <ul >
      <film-item v-for="film in films" :key="film.filmId" :film="film"/>
    </ul>

</template>

<script lang="ts">
import Vue from 'vue'
import { filmApi } from '@/services/api'
import { FilmData } from '@/features/film'
import FilmItem from './components/FilmItem.vue'
export default Vue.extend({
  name: 'FilmList',
  components: {
    FilmItem
  },
  data () :FilmData {
    return {
      films: [],
      filmType: '1',
      page: 1
    }
  },
  created () {
    this.loadFilmList(this.page)
  },

  methods: {
    async loadFilmList (page:number) {
      try {
        const { data } = await filmApi.filmList({ pageNum: 1, type: this.$route.params.type })
        this.films = data.films
      } catch (error) {
        console.log('NowPlaying-loadNowPlayingFilms' + error)
      }
    },

    onScroll () {
      console.log('onScroll')
    }
  }
})

</script>

<style lang="scss" scoped>

</style>
