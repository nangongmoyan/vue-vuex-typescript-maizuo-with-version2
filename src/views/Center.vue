<template>
  <div class="my-center">
    <div class="main" v-if="userInfo">
      <router-link to="/login">
          <div class="center-header">
            <img  class='avatar' :src="userInfo.headIcon" alt="avatar">
            <span class="login-text">{{ userInfo.nickName }}</span>
          </div>
        </router-link>
        <van-cell title="余额" icon="balance-o" is-link/>
        <van-cell title="订单" icon="orders-o" is-link/>
        <van-cell title="优惠券" icon="coupon-o" is-link/>
        <van-cell title="帮助与客服" icon="service-o" is-link/>
        <van-cell title="设置" icon="setting-o" is-link to="/setting"/>
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

.my-center{
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
}
</style>
