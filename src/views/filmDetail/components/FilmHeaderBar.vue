<template>
  <div class="header-bar-main" :style="isDownScroll?{background:'white'}:{background : 'transparent'}">
    <div class="goBack" @click="goBack">
      <img src="@/assets/img/film-detail-back.png" alt="back">
    </div>
    <span v-if="isDownScroll" class="title">{{title}}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'FilmHeaderBar',
  props: {
    title: {
      type: String,
      default: ''
    },
    scrollValue: {
      type: Number,
      default: 50
    }
  },
  data () {
    return {
      isDownScroll: false
    }
  },
  mounted () {
    window.onscroll = this.hanleScroll
  },
  methods: {
    goBack () {
      this.$router.back()
    },
    hanleScroll () {
      if ((document.documentElement.scrollTop || document.body.scrollTop) >= this.scrollValue) {
        this.isDownScroll = true
      } else {
        this.isDownScroll = false
      }
    }
  }
})
</script>

<style lang="scss" scoped>
  .header-bar-main{
    left: 0;
    top:0;
    width:100vw;
    height:2.75rem;
    position: fixed;
    line-height: 2.75rem;
    background: transparent;
    display: flex;
    justify-content: center;
    .goBack {
      height: 30px;
      position: absolute;
      top: 5px;
      left: 5px;
      img {
        width: 30px;
      }
    }
    .title{
      font-size: 17px;
      line-height: 44px;
    }
  }
</style>
