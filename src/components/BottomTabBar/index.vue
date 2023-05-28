<template>
  <footer>
    <ul>
      <router-link v-for="tabBar in tabBars" :key="tabBar.to" :to="tabBar.to" custom v-slot="{navigate, isActive}">
        <li @click="navigate" :class="isActive?'bottomActive':''">
          <img class="tabBarImg" :src="isActive?tabBar.active:tabBar.inActive" :alt="tabBar.to"/>
          <span class="tabBarName">{{ tabBar.name }}</span>
        </li>
      </router-link>
    </ul>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'
import { bottomTabBars } from './const'

export default Vue.extend({
  name: 'BottomTabBar',
  data () {
    return {
      tabBars: bottomTabBars
    }
  }
})
</script>

<style lang="scss" scoped>
  footer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height:3.125rem;
    background: white;
    ul {
      display: flex;
      li {
        flex:1;
        line-height: 1.5625rem;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
  .tabBarImg {
    width:1.5625rem;
    height: 1.5625rem
  }
  .tabBarName{
    font-size: 10px;
  }
  .bottomActive {
    color:#ff5f16
  }
</style>
