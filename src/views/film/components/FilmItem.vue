<template>
  <li @click="toFilmDetail(film.filmId)">
    <div class="film-img">
      <img :src="film.poster"/>
    </div>
    <div class="film-info">
      <div class="film-name">
        <span class="name">{{ film.name }}</span>
        <span class="film-type">{{ film.filmType.name }}</span>
      </div>
      <div class="film-grade" v-if="film.grade">
        <span class="grade-label">观众评分：</span>
        <span class="grade">{{ film.grade }}</span>
      </div>
      <div class="film-actors">主演：{{ film.actors | actorFilter }}</div>
      <div class="film-nation-runtime">{{ film.nation }} | {{ film.runtime }}分钟</div>
    </div>
    <div class="film-buy-tickets" :style="canBuyNow?{background: '#F03D37'}:{background: '#ffb232'}" @click.stop="toBuyTickets">
      <span class="film-buy-tickets-text">{{canBuyNow?'购票':'预购'}}</span>
    </div>
  </li>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FilmItem',
  props: {
    film: {
      type: Object,
      required: true
    },
    filmType: {
      type: String,
      default: '1'
    }
  },
  computed: {
    canBuyNow () :boolean {
      return this.filmType === '1'
    }
  },
  methods: {
    toFilmDetail (filmId:any) {
      this.$router.push({
        name: 'FilmDetail',
        params: { filmId }
      })
    },
    toBuyTickets () {
      console.log('toBuyTickets')
    }
  }
})
</script>

<style lang="scss" scoped>

li {
  display: flex;
  padding: 15px;
  align-items: center;
  border-bottom: 0.5px solid #d2d6dc;
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
    width: calc(100% - 8rem);
    height:5.875rem;
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
      .film-type {
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

  .film-buy-tickets {
    height:25px;
    padding: 0 8.5px;
    border-radius: 12.5px;
      .film-buy-tickets-text {
        color:#fff;
        font-size: 12px;
        line-height: 25px;
      }
    }
}
</style>
