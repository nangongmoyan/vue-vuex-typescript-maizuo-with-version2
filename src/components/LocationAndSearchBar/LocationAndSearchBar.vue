<template>
  <div class="bar-main">
    <city-entry/>
    <slot/>
    <search-icon/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import CityEntry from '../City/CityEntry.vue'
import SearchIcon from '../Search/SearchIcon.vue'
export default Vue.extend({
  name: 'LocationAndSearchBar',
  components: {
    CityEntry,
    SearchIcon
  }
})
</script>

<style lang="scss" scoped>
.bar-main{
  height:46px;
  display: flex;
  padding: 0 15px;
  background: #fff;
  align-items: center;
  z-index: 10;
}

</style>
