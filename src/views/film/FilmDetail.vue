<template>
<div>电影系哦昂情</div>
</template>

<script lang="ts">
import { FilmDetailData, FilmItem } from '@/features/film'
import { filmApi } from '@/services/api'
import Vue from 'vue'
export default Vue.extend({
  name: 'FilmDetail',
  data ():FilmDetailData {
    return {
      film: {} as FilmItem
    }
  },
  created () {
    this.loadFilmDetail()
  },
  methods: {
    async loadFilmDetail () {
      try {
        const { data } = await filmApi.detail(this.$route.params.filmId)
        this.film = data.film
      } catch (error) {
        console.log('FilmDetail-loadFilmDetail' + error)
      }
    }
  }
})
</script>

<style>

</style>
