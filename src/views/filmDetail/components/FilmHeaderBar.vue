<template>
  <div class="header-bar-main" v-scroll="50">
    <div class="goBack" @click="goBack">
      <img src="@/assets/img/film-detail-back.png" alt="back">
    </div>
    <span class="title">{{title}}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

Vue.directive('scroll', {
  inserted (el, binding) {
    el.style.background = 'transparent'

    el.lastChild && (el.lastChild.style.display = 'none')
    window.onscroll = () => {
      if ((document.documentElement.scrollTop || document.body.scrollTop) > binding.value) {
        el.style.background = 'white'
        el.lastChild && (el.lastChild.style.display = '')
      } else {
        el.style.background = 'transparent'
        el.lastChild && (el.lastChild.style.display = 'none')
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})
export default Vue.extend({
  name: 'FilmHeaderBar',
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    goBack () {
      this.$router.back()
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
