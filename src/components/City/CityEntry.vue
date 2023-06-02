<template>
  <div class="city-entry">
    <span class="city-name">深圳</span>
    <van-icon name="arrow-down" size="10" color="#F03D37" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CityEntry'
})
</script>

<style lang="scss" scoped>
.city-name{
  font-size: 13px;
  color: #F03D37;
  margin-right: 2.5px;
}
</style>
