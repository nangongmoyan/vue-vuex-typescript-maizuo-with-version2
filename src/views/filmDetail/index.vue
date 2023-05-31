<template>

  <div v-if="film" class="main">
    <div class="goBack" @click="goBack">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAAA6CAMAAADWZboaAAAAt1BMVEVHcEz///////////////////////////////////////////////////////////////////////////////////97e3saGxyIiYnW1tYdHh9UVVUpKiulpaXLy8s6OzyysrIiIyPx8fEeHyC/v7/5+fklJihCQ0Ntb28bHB1hYWKXl5c0NTZLS0xAQUI4ODk3ODjh4eHr6+s2Nzfq6uptbm5gYGIbHB39/f2VlZdLS0wzNDUZGhs8UYRWAAAAPHRSTlMAGHpLE3cKgEdgVnJfNBZ+cBx9A28js/6sjPvK7p+Q3pn1g/iUgfLYuvzCpeTR2eHiiIXihrvD/YCl0uTUXbEtAAABd0lEQVRIx91W13KDQAw0xnCHARuDe+/dKY7T9f/flTzghCLdMaMXj/eRnZ0T0qqUSveBim96gRWGVuCZfqW4zpCuSMGVRiFhwxEInIY+0qogUFXHHcm6IFGXEa20HaGEY1PKWlNo0KzhylZZaFFuoW8WUP5qkXdtMtrnx4dkzLn/jcgMXY7wlMpVNs+SUs4nMOylvsiME6h6rjawHmfqm/YG6aETzJY5X6V8SykHsJjmvyb9TOVoD/0R5qpElxHKLewOKGHo0tuGThdn/pPsony3A20iHPevMih92MGW9OO1Pj5Gjvqwp63sx1IT4aYLGCi6wIylXp5azuCkaiAvlgY5ZryGzUolDWKplSV6Q5jMlW1rxdIwS7zA8azu+JCWfl+KSRkBM9KEF+fro0BxGJagjPimNyJp/1et/RlNx2l1esC8f2oGDGOscYYpY4RzFgdjXSmW5Fm3JBmrmXMQcM4QzvHDObk4hx7nvGQdtaxTmnXA3zR+AH8JUdNL967cAAAAAElFTkSuQmCC" alt="">
    </div>
    <img :src="film.poster" class="poster"/>
    <!-- <div class="film-content"> -->
      <film-information :film="film"/>
      <film-actor :actors="film.actors"/>
      <film-photo :photos="film.photos"/>
      <div class="toBuyTicket">选座购票</div>
    <!-- </div> -->

  </div>
</template>

<script lang="ts">
import { FilmDetailData } from '@/features/film'
import { filmApi } from '@/services/api'
import Vue from 'vue'
import FilmActor from './components/FilmActor.vue'
import FilmInformation from './components/FilmInformation.vue'
import FilmPhoto from './components/FilmPhoto.vue'
export default Vue.extend({
  name: 'FilmDetail',
  components: {
    FilmActor,
    FilmInformation,
    FilmPhoto
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
    goBack () {
      this.$router.go(-1)
    },
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
  .poster{
    width: 100%;
  }
  .goBack {
    height: 30px;
    position: absolute;
    top: 5px;
    left: 5px;
    img {
      width: 30px;
    }
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
    background-color: #ff5f16;
    color: #fff;
    font-size: 16px;
    line-height: 49px;
    z-index: 1000;
  }
}

</style>
