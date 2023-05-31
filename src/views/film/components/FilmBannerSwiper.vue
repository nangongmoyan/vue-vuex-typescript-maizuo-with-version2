<template>
  <div class="swiper-container filmBanner">
    <div class="swiper-wrapper">
      <slot/>
    </div>
    <div class="swiper-pagination"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'

export default Vue.extend({
  name: 'FilmBannerSwiper',
  mounted () {
    new Swiper('.filmBanner', {
      pagination: {
        el: '.swiper-pagination'
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    })
  }
})
</script>

<style lang="scss" scoped>

</style>
