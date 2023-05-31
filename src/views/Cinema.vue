<template>
  <div class="cinema-main">
    <cinema-nav-bar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CinemaNavBar from './cinema/components/CinemaNavBar.vue'

export default Vue.extend({
  components: { CinemaNavBar },
  name: 'CinemaBar'
})

</script>

<style lang="scss" scoped>
  .cinema-main{
    background: #f4f4f4;
  }
</style>
