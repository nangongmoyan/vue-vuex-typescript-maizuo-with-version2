
<template>
  <div class="swiper-container filmActor">
    <div class="swiper-wrapper">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.min.css'

export default Vue.extend({
  name: 'FilmDetailSwiper',
  mounted () {
    new Swiper('.filmActor', {
      freeMode: true,
      slidesPerView: 4,
      spaceBetween: 15
    })
  }
})
</script>

<style lang="scss" scoped>

</style>
