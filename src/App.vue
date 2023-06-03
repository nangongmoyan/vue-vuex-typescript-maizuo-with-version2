<template>
  <div>
    <router-view v-if="currentCity"/>
    <bottom-tab-bar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import BottomTabBar from '@/components/BottomTabBar/index.vue'
import { mapState } from 'vuex'
import { cityIsFailure, convertCity, getCurrentPosition } from './features/city'
export default Vue.extend({
  components: {
    BottomTabBar
  },
  computed: {
    ...mapState(['currentCity'])
  },
  created () {
    this.moYanFilmInit()
  },
  methods: {
    moYanFilmInit () {
      /** 1.前提：地址数据要有 */
      /** 1.1 地址数据如果缓存有责不请求 */
      /** 2.进行定位处理 */
      /** 2.1在第一次打开的时候进行定位，定位成功缓存起来，缓存有数据则不请求，缓存没数据则请求 */

      /** 地址数据失效，发起请求 */
      if (cityIsFailure()) {
        convertCity().then(_ => {
          getCurrentPosition({})
        })
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
