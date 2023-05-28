<template>
  <footer>
    <ul>
      <router-link v-for="tabBar in tabBars" :key="tabBar.to" :to="tabBar.to" custom v-slot="{navigate, isActive}">
        <li @click="navigate" >
          <span :class="isActive?'topActive':''">{{ tabBar.name }}</span>
        </li>
      </router-link>
    </ul>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { topTabBar } from './const'

export default Vue.extend({
  name: 'FilmsHeader',
  data () {
    return {
      tabBars: topTabBar
    }
  }
})
</script>

<style lang="scss" scoped>
  ul {
    display: flex;
    height: 3.125rem;
    line-height: 3.125rem;
    li {
      flex:1;
      text-align: center;
    }
  }
  .topActive {
    color:#ff5f16;
    border-bottom: 2px solid #ff5f16;
  }
</style>
