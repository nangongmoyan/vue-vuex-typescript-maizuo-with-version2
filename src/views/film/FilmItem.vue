<template>
  <van-cell @click="toFilmDetail(film.filmId)">
    <van-image
      width="4.125rem"
      height="5.875rem"
      :src="film.poster"
      style="float: left;"
    />
    <div class="film-info">
      <div class="film-info-name">
        <span class="film-name">{{ film.name }}</span>
        <span class="film-type">{{ film.filmType.name }}</span>
      </div>
      <div class="film-grade" v-if="film.grade">
        <span class="grade-label">观众评分：</span>
        <span class="grade">{{ film.grade }}</span>
      </div>
      <div class="film-actors">主演：{{ film.actors | actorFilter }}</div>
      <div class="film-nation-runtime">{{ film.nation }} | {{ film.runtime }}分钟</div>
    </div>
    <div class="film-buy-tickets">
      <van-button
          type="primary"
          @click.stop="toBuyTickets"
          :style="canBuyNow?{background: '#F03D37'}:{background: '#ffb232'}">
          {{canBuyNow?'购票':'预购'}}
        </van-button>
    </div>
  </van-cell>
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
.van-list {
  .van-cell{
    display: flex;
    padding: 10px;
    overflow: hidden;
    align-items: center;
    .film-info{
      position: relative;
      float: left;
      width: calc(100% - 9.375rem);
      padding: 0 10px;
      .film-info-name{
        span {
          display: inline-block;
          vertical-align: middle;
        }
        .film-name{
          max-width: calc(100% - 25px);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          color: #191a1b;
          font-size: 16px;
          height: 22px;
          line-height: 22px;
        }
        .film-type {
          font-size: 9px;
          color: #fff;
          background-color: #d2d6dc;
          height: 14px;
          line-height: 14px;
          padding: 0 2px;
          border-radius: 2px;
        }
      }
      .film-grade {
        display: flex;
        margin-top: 2.5px;
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
        margin-top: 2.5px;
        color: #797d82;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .film-nation-runtime {
        font-size: 13px;
        margin-top: 2.5px;
        color: #797d82;
      }
    }
  }
  .film-buy-tickets{
    display: flex;
    align-items: center;
    justify-content: center;
    height:5.875rem;
    .van-button{
    border: 0;
    height:25px;
    font-size: 12px;
    padding: 0 8.5px;
    border-radius: 12.5px;
  }
  }

}
</style>
