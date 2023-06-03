<template>
  <div class="information">
    <div class="film-name-grade">
        <div class="film-name">
          <span class="name">{{ film.name }}</span>
          <span class="film-type">{{ film.filmType.name }}</span>
        </div>
        <div v-if="film.grade" class="film-grade">
          <span class="grade">{{ film.grade }}</span>
          <span class="grade-text"> 分</span>
        </div>
    </div>
    <div class="detail-text">{{ category }}</div>
    <div class="detail-text">{{ premiereAt }}上映</div>
    <div class="detail-text">{{ film.nation }} | {{ film.runtime }}分钟</div>
    <div class="detail-text" :class="isHidden?'hidden':''">{{ film.synopsis }}</div>
    <div class="toggle" @click="isHidden=!isHidden">{{ isHidden?'展开':'收起' }}</div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import dayjs from 'dayjs'
export default Vue.extend({
  props: {
    film: {
      type: Object
    }
  },
  name: 'FilmInformation',
  data () {
    return {
      isHidden: true
    }
  },
  computed: {
    category () :string {
      return this.film?.category?.split('|')?.join(' | ') ?? ''
    },
    premiereAt () :string {
      return this.film?.premiereAt ? dayjs(this.film?.premiereAt * 1000).format('YYYY-MM-DD') : ''
    }
  }
})
</script>

<style lang="scss" scoped>
.information{
  background: #fff;
  padding: 15px;
  .film-name-grade{
    display: flex;
    align-items: center;
    .film-name{
      flex:1;
      display: flex;
      align-items: center;
      .name{
        font-size: 18px;
        color:#191a1b;
        line-height: 24px;
        margin-right: 7px;
      }
      .film-type {
        font-size: 9px;
        background-color: #d2d6dc;
        height: 14px;
        line-height: 14px;
        padding: 0 2px;
        border-radius: 2px;
        color: #fff;
        display: inline-block;
      }
    }
    .film-grade{
      text-align: right;
      color: #ffb232;
      .grade{
        font-size: 18px;
        font-style: italic;
      }
      .grade-text{
        font-size: 10px;
      }
    }
  }

  .detail-text{
    color: #797d82;
    font-size: 13px;
    line-height: 18.5px;
    margin-top: 4px;
  }

  .toggle{
    font-size: 10px;
    text-align: center;
    margin-top: 3px;
    color: #797d82;
  }
  .hidden{
    overflow: hidden;
    height: 37px
  }
}
</style>
