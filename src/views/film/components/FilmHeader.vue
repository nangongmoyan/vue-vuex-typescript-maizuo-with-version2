<template>
  <div>
    <ul>
      <router-link v-for="tabBar in tabBars" :key="tabBar.to" :to="tabBar.to" custom v-slot="{navigate, isActive}">
        <li @click="navigate" >
          <span :class="isActive?'topActive':''">{{ tabBar.name }}</span>
        </li>
      </router-link>
    </ul>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { topTabBar } from './const'

export default Vue.extend({
  name: 'FilmHeader',
  data () {
    return {
      tabBars: topTabBar
    }
  }
})
</script>

<style lang="scss" scoped>
div{
  width: 100%;
  height: 3.125rem;
  background: #fff;
  z-index: 1000;
  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    li {
      height: 100%;
      margin: 0 60px;
      font-size: 14px;
      line-height:3.125rem;
      box-sizing: border-box;
    }
  }
}

  .topActive {
    color:#ff5f16;
    border-bottom: 2px solid #ff5f16;
  }
</style>
