
<template>
  <div  class="swiper-container" :class="name">
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
  props: {
    name: {
      type: String,
      default: 'maizuo'
    },
    prevView: {
      type: Number,
      default: 1
    }
  },
  mounted () {
    new Swiper('.' + this.name, {
      freeMode: true,
      spaceBetween: 15,
      slidesPerView: this.prevView
    })
  }
})
</script>

<style lang="scss" scoped>

</style>
