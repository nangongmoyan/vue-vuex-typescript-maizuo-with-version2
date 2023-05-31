<template>
  <div class="swiper-slide">
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SwiperItem'
})
</script>

<style lang="scss" scoped>

</style>
