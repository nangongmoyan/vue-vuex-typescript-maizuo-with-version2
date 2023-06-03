<template>
  <div>
    <router-view/>
    <bottom-tab-bar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BottomTabBar from '@/components/BottomTabBar/index.vue'
import { cityFailure, transformCity } from './utils/city'
import { getLocation } from './utils/location'
export default Vue.extend({
  components: {
    BottomTabBar
  },
  created () {
    this.moYanFilmInit()
    getLocation()
  },
  methods: {
    moYanFilmInit () {
      if (cityFailure()) {
        transformCity()
      }
    }
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
