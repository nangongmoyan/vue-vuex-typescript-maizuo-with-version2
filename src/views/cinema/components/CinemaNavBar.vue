<template>
  <div class="nav-bar-main">
    <ul class="nav-bar-first">
      <router-link to="/city">
        <li  class="nar-bar-left">
          <span class="city-name">深圳</span>
          <i class="iconfont iconarrow-down"></i>
        </li>
      </router-link>
      <li class="nar-bar-center">
        影院
      </li>
      <li class="nar-bar-right">
        <img src="@/assets/img/cinema-search.png" class="cinema-search"/>
      </li>
    </ul>
    <ul class="nav-bar-second">
      <li>
        <span>全城</span>
        <i class="iconfont iconarrow-down"></i>
      </li>
      <li>
        <span>APP订票</span>
        <i class="iconfont iconarrow-down"></i>
      </li>
      <li>
        <span>最近去过</span>
        <i class="iconfont iconarrow-down"></i>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'CinemaNavBar'
})
</script>

<style lang="scss" scoped>
  .nav-bar-main{
    position: fixed;
    z-index: 100;
    .nav-bar-first{
      width:100vw;
      display: flex;
      height:2.75rem;
      background: #fff;
      align-items: center;
      justify-content: center;
      border-bottom: 0.5px solid #f3f4f6;
      .nar-bar-left{
        top:0;
        left:15px;
        display: flex;
        height:2.75rem;
        position: absolute;
        align-items: center;
        .city-name{
          font-size: 12px;
        }
      }
      .nar-bar-center{
        font-size: 17px;
      }
      .nar-bar-right{
        top: 0px;
        right: 15px;
        display: flex;
        height:2.75rem;
        position: absolute;
        align-items: center;
        .cinema-search{
          width: 1.125rem;
          height: 1.125rem
        }
      }

    }

      .nav-bar-second{
        display: flex;
        height:3.125rem;
        background: #fff;
        align-items: center;
        justify-content: space-between;
        border-bottom: 0.5px solid #f3f4f6;
        li{
          flex:1;
          text-align: center;
          span, i {
            font-size: 13px;
            color: #191a1b;
          }
        }
      }

  }

</style>
