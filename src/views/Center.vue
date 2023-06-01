<template>
  <div class="mz-center">
    <div class="main" v-if="userInfo">
      <router-link to="/login">
          <div class="center-header">
            <img  class='avatar' :src="userInfo.headIcon" alt="avatar">
            <span class="login-text">{{ userInfo.nickName }}</span>
          </div>
        </router-link>

        <div class="order-tab">
          <div class="order-tab-item">
            <span class="order-number">0张</span>
            <span class="order-label">卖座券</span>
          </div>
          <div class="order-tab-item">
            <span class="order-number">¥0</span>
            <span class="order-label">余额</span>
          </div>
        </div>
        <div class="card">
          <img  class='card-img' src="@/assets/img/film-order.png"/>
          <span class="card-label">电影订单</span>
          <img class="card-right-arrow" src="@/assets/img/right-arrow.png"/>
        </div>
        <div class="card">
          <img  class='card-img' src="@/assets/img/combination-red-envelope.png"/>
          <span class="card-label">组合红包</span>
          <img class="card-right-arrow" src="@/assets/img/right-arrow.png"/>
        </div>
        <div class="card">
          <img  class='card-img' src="@/assets/img/help-service.png"/>
          <span class="card-label">帮助与客服</span>
          <img class="card-right-arrow" src="@/assets/img/right-arrow.png"/>
        </div>
        <div class="card">
          <img  class='card-img' src="@/assets/img/setting.png"/>
          <span class="card-label">设置</span>
          <img class="card-right-arrow" src="@/assets/img/right-arrow.png"/>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { CenterData } from '@/features/center'
import { userApi } from '@/services/api'
import Vue from 'vue'

export default Vue.extend({
  name: 'CenterBar',
  data () :CenterData {
    return {
      userInfo: null
    }
  },
  created () {
    this.loadUserInfo()
  },
  methods: {
    async loadUserInfo () {
      try {
        const { data } = await userApi.getUserInfo()
        this.userInfo = data
      } catch (error) {
        console.log('CenterBar-loadUserInfo' + error)
      }
    }
  }
})

</script>

<style lang="scss" scoped>

.mz-center{
  height:100%;
}
.main {
  height:100vh;
  background: #f4f4f4;
  .center-header{
    text-align: center;
    margin-top: -2.75rem;
    height: 15rem;
    padding-left: 1.375rem;
    padding-top: 4rem;
    background: url(https://obj.pipi.cn/festatic/asgard/resources/images/dpmmweb/mycenter/bg.png);
    background-size: cover;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: #fff;
    box-sizing: border-box;
    .avatar{
      height: 3.9375rem;
      width:  3.9375rem;
      border-radius: 1.9688rem;
      margin-right: 20px;
      border: 2px solid #fff;
    }
    .login-text{
      font-size: 16px;
    }
  }
  .order-tab{
    width:100%;
    display: flex;
    height: 5rem;
    background: #fff;
    align-items: center;
    .order-tab-item{
      flex:1;
      display: flex;
      align-items: center;
      flex-direction: column;
      .order-number{
        color: #191a1b;
        font-size: 17px;
      }
      .order-label{
        font-size: 13px;
        color: #797d82;
      }
    }
  }
  .card{
    background: #fff;
    display: flex;
    align-items: center;
    height:3.125rem;
    padding: 0 15px;
    border-bottom: 0.1px solid #f0f2f4;
    .card-img {
      width:1.25rem;
      height:1.25rem;
    }
    .card-label{
      margin-left: 15px;
      color: #191a1b;
      flex:1;
      font-size: 13px;
    }
    .card-right-arrow{
      text-align: right;
      width: 6px;
      height: 10px;
    }
  }
}
</style>
