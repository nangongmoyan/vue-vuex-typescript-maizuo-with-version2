<template>
  <li @click="toFilmDetail(film.filmId)">
    <div class="film-img">
      <img :src="film.poster"/>
    </div>
    <div class="film-info">
      <div class="film-name">
        <span class="name">{{ film.name }}</span>
        <span class="filmType">{{ film.filmType.name }}</span>
      </div>
      <div class="film-grade" v-if="film.grade">
        <span class="grade-label">观众评分：</span>
        <span class="grade">{{ film.grade }}</span>
      </div>
      <div class="film-actors">主演：{{ film.actors | actorsFilter }}</div>
      <div class="film-nation-runtime">{{ film.nation }} | {{ film.runtime }}分钟</div>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NowPlayingItem',
  props: {
    film: {
      type: Object,
      required: true
    }
  },
  filters: {
    actorsFilter: (actors:any[]) => {
      return actors.map(actor => actor.name).join(' ')
    }
  },
  methods: {
    toFilmDetail (filmId:any) {
      this.$router.push({
        name: 'FilmDetail',
        params: { filmId }
      })
    }
  }
})
</script>

<style lang="scss" scoped>

li {
  width:100%;
  display: flex;
  padding: 15px;
  .film-img{
    width:4.125rem;
    height:5.875rem;
    background: rgb(249, 249, 249);
    img {
      width:4.125rem;
      height:5.875rem;
      border-radius: 3px;
    }
  }
  .film-info {
    width: calc(100% - 10rem);
    padding:0 10px;
    .film-name {
      margin-top: 4px;
      display: flex;
      align-items: center;
      .name{
        max-width: calc(100% - 25px);
        font-size: 16px;
        height: 22px;
        line-height: 22px;
        margin-right: 5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;

      }
      .filmType {
        font-size: 9px;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        color: #fff;
      }
    }
    .film-grade {
      display: flex;
      margin-top: 4px;
      align-items: center;
      .grade-label{
        font-size: 13px;
        color: #797d82;
      }
      .grade {
        color: #ffb232;
        font-size: 14px;
      }
    }
    .film-actors {
      font-size: 13px;
      margin-top: 4px;
      color: #797d82;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .film-nation-runtime {
      font-size: 13px;
      margin-top: 4px;
      color: #797d82;
    }
  }
}
</style>
