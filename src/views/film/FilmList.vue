<template>
  <div style="padding-bottom: 50px;">
    <film-banner :banner="banner"/>
    <van-list
      v-model="loading"
      @load="onLoadMore"
      :finished="finished"
      :immediate-check="false"
      finished-text="- THE END -"
    >
      <film-item v-for="film in films" :key="film.filmId" :film="film" :filmType="$route.params.type"/>
    </van-list>
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
      films: [],
      banner: null,
      totalPage: 0,
      currentPage: 1,
      loading: false,
      finished: false
    }
  },
  created () {
    this.loadFilmBanner()
    this.loadFilmList()
  },

  methods: {
    async loadFilmList () {
      try {
        console.log(' this.currentPage', this.currentPage)
        const { data } = await filmApi.filmList({
          pageNum: this.currentPage,
          type: this.$route.params.type
        })
        this.films = [...this.films, ...data.films]

        this.currentPage === 1 && (this.totalPage = data.total)
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
    },
    onLoadMore () {
      if (this.totalPage !== 0 && this.films.length === this.totalPage) {
        this.finished = true
      } else {
        setTimeout(() => {
          this.currentPage++
          this.loadFilmList().then(() => {
            this.loading = false
          })
        }, this.currentPage === 1 ? 750 : 0)
      }
    }

  }
})

</script>

<style lang="scss" scoped>
</style>
