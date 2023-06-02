<template>
    <div class="my-main" v-if="user">
      <navigation-bar title="设置"/>
      <van-cell title="账号ID" :value="user.userId" style="margin-top: 10px;" />
      <van-cell title="登录密码" value="修改" is-link style="margin-top: 10px;"/>
      <van-cell title="安全密码" value="未设置" is-link/>
      <van-cell title="手机号码" :value="user.nickName" is-link style="margin-top: 10px;"/>
      <van-cell title="软件版本" is-link />
      <van-cell title="隐私协议" is-link />
      <van-cell title="用户协议" is-link />
      <van-cell title="意见反馈" is-link />
      <van-cell title="清除缓存" value="修改" style="margin-top: 10px;"/>
      <van-cell title="注销账号" is-link style="margin-top: 10px;"/>
      <van-button type="primary" block color="#F03D37" class="logout" @click="onLogout">退出登录</van-button>
      <van-action-sheet
        v-model="show"
        :actions="actions"
        cancel-text="取消"
        @select="onSelect"
        description="是否退出墨言电影"
        close-on-click-action
      />
   </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'
import NavigationBar from '@/components/NavigationBar/index.vue'
export default Vue.extend({
  name: 'SettingPage',
  components: {
    NavigationBar
  },

  data () {
    return {
      show: false,
      actions: [{ key: 'logout', name: '退出', color: '#F03D37' }]
    }
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    onLogout () {
      this.show = true
    },
    onSelect (item:any) {
      if (item.key === 'logout') {
        // 清除登录状态
        this.$store.commit('setUser', null)
        this.$router.push({ path: '/film' })
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.my-main{
  flex:1;
  display: flex;
  flex-direction: column;
  height:100vh;
  background: #f4f4f4;
  .logout{
    width: calc(100vw - 1.875rem);
    position: fixed;
    bottom: 30px;
    margin-left: .9375rem;
  }
}

</style>
