<template>
  <film-banner-swiper v-if="banner">
    <swiper-item>
      <img class="banner-item" :src="banner.imgUrl"/>
    </swiper-item>
  </film-banner-swiper>
</template>

<script lang="ts">
import Vue from 'vue'
import FilmBannerSwiper from './FilmBannerSwiper.vue'
import SwiperItem from '@/components/SwiperItem/index.vue'
export default Vue.extend({
  components: { FilmBannerSwiper, SwiperItem },
  name: 'FilmBanner',
  props: {
    banner: {
      type: Object
    }
  }

})
</script>

<style lang="scss" scoped>
 .banner-item{
    width:100vw;
    height:13.125rem
 }
</style>
