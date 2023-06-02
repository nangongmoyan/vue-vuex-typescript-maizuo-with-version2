<template>
  <div class="search-icon">
    <van-icon name="search" size="25" color="#F03D37"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SearchIcon'
})
</script>

<style lang="scss" scoped>
.search-icon{
  display: flex;
  width: 40.5px;
  justify-content: center;
}
</style>
