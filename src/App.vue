<template>
  <div>
    <bottom-tab-bar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BottomTabBar from '@/components/BottomTabBar/index.vue'
export default Vue.extend({
  components: {
    BottomTabBar
  }
})
</script>
<style lang="scss">

* {
  margin: 0;
  padding: 0;
}

html, body {
  height: 100%
}

ul {
  list-style: none;
}

</style>
