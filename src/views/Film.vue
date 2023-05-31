<template>
  <div>
    <film-header class="sticky"/>

      <router-view :key="$route.fullPath"/>

  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import FilmHeader from './film/components/FilmHeader.vue'
export default Vue.extend({
  name: 'FilmBar',
  components: {
    FilmHeader
  },
  data () {
    return {
      isFixed: false
    }
  },
  mounted () {
    window.onscroll = this.hanleScroll
  },
  // beforeDestroy () {
  //   // window.onscroll = ''
  // },
  methods: {
    hanleScroll () {
      if (document.documentElement.scrollTop >= 200) {
        this.isFixed = true
      } else {
        this.isFixed = false
      }
    }
  }
})

</script>

<style lang="scss" scoped>
.sticky{
  position: sticky;
  top:0px
}
</style>
