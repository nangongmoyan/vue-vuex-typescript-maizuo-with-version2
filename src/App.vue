<template>
  <div>
    <bottom-tab-bar/>
    <section>
      <router-view/>
    </section>
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
