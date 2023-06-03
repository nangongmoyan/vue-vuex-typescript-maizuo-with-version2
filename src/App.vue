<template>
  <div>
    <router-view/>
    <bottom-tab-bar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BottomTabBar from '@/components/BottomTabBar/index.vue'
export default Vue.extend({
  components: {
    BottomTabBar
  },
  created () {
    navigator.geolocation.getCurrentPosition(position => {
      console.log({ position })
    }, error => {
      console.log({ error })
    }, {
      // enableHightAccuracy: false,
      timeout: 30000,
      maximumAge: 0
    })
  }
})
</script>
<style lang="scss">

* {
  margin: 0;
  padding: 0;
}

// html {
//   height: 100%
// }

ul {
  list-style: none;
}
section{
  padding-bottom: 3.125rem;
}

</style>
