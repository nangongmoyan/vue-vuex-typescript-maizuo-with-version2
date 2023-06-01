<template>
    <ul>
      <router-link v-for="tabBar in tabBars" :key="tabBar.to" :to="tabBar.to" custom v-slot="{navigate, isActive}">
        <li @click="navigate" :class="isActive?'bottomActive':''">
          <i :class='tabBar.class'></i>
          <span class="tabBarName">{{ tabBar.name }}</span>
        </li>
      </router-link>
    </ul>
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

    ul{
      position: fixed;
    bottom: 0;
    width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding: 0;
    margin: 0;
    z-index: 100;
    background: #fff;
    list-style: none;
    height:3.125rem;
      li{
          flex:1;
          line-height: 1.5625rem;
          text-align: center;
          display: flex;
          align-items: center;
          flex-direction: column;
        i {
          font-size: 20px;
        }
        // span {
        //   position: absolute;
        //   font-size: 10px;
        //   line-height: 12px;
        //   color: #797d82;
        //   top: 38px;
        //   left: 50%;
        //   transform: translateX(-50%);
        // }
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
