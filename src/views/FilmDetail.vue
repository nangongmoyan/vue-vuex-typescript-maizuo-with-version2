<template>
  <div v-if="film" class="main top-page">
    <film-nav-bar :title="film.name"/>
    <img :src="film.poster" class="poster"/>
    <film-information :film="film"/>
    <film-actor :actors="film.actors"/>
    <film-photo :photos="film.photos"/>
    <div class="toBuyTicket">选座购票</div>
  </div>
</template>

<script lang="ts">
import { FilmDetailData } from '@/features/film'
import { filmApi } from '@/services/api'
import Vue from 'vue'
import FilmActor from './filmDetail/FilmActor.vue'
import FilmNavBar from './filmDetail/FilmNavBar.vue'
import FilmInformation from './filmDetail/FilmInformation.vue'
import FilmPhoto from './filmDetail/FilmPhoto.vue'
export default Vue.extend({
  name: 'FilmDetail',
  components: {
    FilmActor,
    FilmPhoto,
    FilmNavBar,
    FilmInformation
  },
  data ():FilmDetailData {
    return {
      film: null

    }
  },

  created () {
    this.loadFilmDetail()
  },
  methods: {
    async loadFilmDetail () {
      try {
        const { data } = await filmApi.filmInfo(this.$route.params.filmId)
        this.film = data.film
      } catch (error) {
        console.log('FilmDetail-loadFilmDetail' + error)
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.main{
  // height:100vh;
  background: #f4f4f4;
  padding-bottom: 3.0625rem;
  .poster{
    width: 100%;
  }
  .film-content{
    padding: 15px;
    padding-top: 12px;

  }
  .toBuyTicket {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 3.0625rem;
    text-align: center;
    background-color: #F03D37;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
    z-index: 1000;
  }
}

</style>
