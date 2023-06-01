<template>
  <van-nav-bar :title="title" :left-text="leftText">
    <template #left>
      <div @click="onClickLeft">
        <van-icon  v-if="showArrowLeft" name="arrow-left" size="20"  color="#a3a3a3"/>
      </div>
    </template>
    <template #right v-if="showRight">
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'NavigationBar',
  props: {
    showArrowLeft: {
      type: Boolean,
      default: true
    },
    showRight: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    leftText: {
      type: String,
      default: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.back()
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
