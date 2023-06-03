<template>
    <location-and-search-bar>
      <div class="title"> 影院 </div>
  </location-and-search-bar>

</template>

<script lang="ts">
import Vue from 'vue'

import LocationAndSearchBar from '@/components/LocationAndSearchBar/LocationAndSearchBar.vue'
export default Vue.extend({
  name: 'CinemaHeader',
  components: { LocationAndSearchBar }
})
</script>

<style lang="scss" scoped>
.title{
  flex:1;
  font-size: 16px;
  color: #323233;
  font-weight: 500;
  text-align: center;
}
</style>
