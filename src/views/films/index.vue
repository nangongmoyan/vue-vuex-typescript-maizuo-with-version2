<template>
  <div>
    <films-header/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FilmsHeader from './components/FilmsHeader.vue'
export default Vue.extend({
  name: 'FilmsIndex',
  components: {
    FilmsHeader
  }
})

</script>

<style lang="scss" scoped>

</style>
