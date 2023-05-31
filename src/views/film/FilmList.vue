<template>
  <div>
    <film-banner :banner="banner"/>
    <ul >
      <film-item v-for="film in films" :key="film.filmId" :film="film"/>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { filmApi } from '@/services/api'
import { FilmData } from '@/features/film'
import FilmItem from './components/FilmItem.vue'
import FilmBanner from './components/FilmBanner.vue'
export default Vue.extend({
  name: 'FilmList',
  components: {
    FilmItem,
    FilmBanner
  },
  data () :FilmData {
    return {
      page: 1,
      films: [],
      banner: null,
      filmType: '1'
    }
  },
  created () {
    this.loadFilmBanner()
    this.loadFilmList(this.page)
  },

  methods: {
    async loadFilmList (page:number) {
      try {
        const { data } = await filmApi.filmList({ pageNum: 1, type: this.$route.params.type })
        this.films = data.films
      } catch (error) {
        console.log('FilmList-loadFilmList' + error)
      }
    },

    async loadFilmBanner () {
      try {
        const { data } = await filmApi.filmBanner()
        this.banner = data
      } catch (error) {
        console.log('FilmList-loadFilmBanner' + error)
      }
    }

  }
})

</script>

<style lang="scss" scoped>

</style>
