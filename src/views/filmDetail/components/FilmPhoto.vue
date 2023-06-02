<template>
  <div class="photo">
    <div>
      <span class="photo-title-text">剧照</span>
    </div>
    <film-detail-swiper style="margin-top: 12px;" name="photo-swiper" :prevView="2.3">
      <swiper-item v-for="(photo, index) in photos" :key="photo">
        <img :src="photo" class="photo-img" @click="onPreview(index)" />
      </swiper-item>
    </film-detail-swiper>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ImagePreview } from 'vant'
import FilmDetailSwiper from './FilmDetailSwiper.vue'
import SwiperItem from '@/components/SwiperItem/index.vue'
export default Vue.extend({
  name: 'FilmPhoto',
  props: {
    photos: {
      type: Array
    }
  },
  components: { FilmDetailSwiper, SwiperItem },
  methods: {
    onPreview (startPosition:number) {
      ImagePreview({
        startPosition,
        closeable: true,
        images: (this.photos as string[])
      })
    }
  }
})
</script>

<style lang="scss" scoped>
 .photo{
  background: #fff;
  padding: 15px;
  margin-top: 12px;
  .photo-title-text {
    font-size: 16px;
    color: #191a1b;

  }
  .photo-img {
      width:9.375rem;
      height:5.8438rem
    }

 }
</style>
