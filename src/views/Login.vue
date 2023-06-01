<template>
  <div >
    <navigation-bar/>
    <div class="login-main">
      <img  class='logo' src="https://assets.maizuo.com/h5/mz-auth/public/app/img/logo.19ca0be.png"/>
      <div class="logo-label">卖座电影</div>
      <van-form  class="login-form">
        <van-cell-group inset>
          <van-field
            clearable
            type="tel"
            label="手机号"
            maxlength="11"
            v-model="mobile"
            placeholder="请输入手机号"

          />
          <van-field
            center
            clearable
            type="tel"
            maxlength="6"
            label="短信验证码"
            v-model="smsCode"
            @click="sendSms"
            placeholder="请输入短信验证码"
          >
            <template #button>
              <van-button
                size="small"
                type="primary"
                color ='#ff5f16'
                :disabled="getSmsBtnDisable">
                  {{ smsBtnText }}
              </van-button>
            </template>
          </van-field>
        </van-cell-group>
      </van-form>
      <van-button
        block
        type="primary"
        color ='#ff5f16'
        @click="onLogin"
        loading-text="登录中..."
        :loading="logining"
        :disabled='!loginAbled'>
      登录
      </van-button>
    </div>
  </div>
</template>

<script lang="ts">
import { authApi } from '@/services/api'
import Vue from 'vue'
import NavigationBar from '@/components/NavigationBar/index.vue'
export default Vue.extend({
  name: 'LoginPage',
  components: {
    NavigationBar
  },
  data () {
    return {
      mobile: '',
      smsCode: '',
      waitTime: 60,
      logining: false,
      smsBtnText: '发送验证码',
      getSmsBtnDisable: false
    }
  },
  computed: {
    loginAbled ():boolean {
      return /^1[3456789]\d{9}$/.test(this.mobile) && !this.logining
    }
  },
  methods: {
    onClickLeft () {
      console.log('onClickLeft')
    },
    async sendSms () {
      try {
        authApi.sendSmsCode(this.mobile)
        this.waitTime--
        this.getSmsBtnDisable = true
        const timer = setInterval(() => {
          if (this.waitTime > 1) {
            this.waitTime--
            this.smsBtnText = `${this.waitTime}s 后重新发送`
          } else {
            clearInterval(timer)
            this.waitTime = 60
            this.smsBtnText = '发送验证码'
            this.getSmsBtnDisable = false
          }
        }, 1000)
      } catch (error) {
        console.log('LoginPage-sendSms' + error)
      }
    },
    async onLogin () {
      try {
        this.logining = true
        const { data } = await authApi.loginBySms(this.mobile, this.smsCode)
        this.$store.commit('setUser', data)
        setTimeout(() => {
          this.$router.push((this.$route.query.redirect as string) ?? '/film')
        }, 2000)
      } catch (error) {
        console.log('LoginPage-onLogin' + error)
      }
      this.logining = false
    }
  }
})
</script>

<style lang="scss" scoped>
.login-main{
  display: flex;
  padding: 0 15px;
  align-items: center;
  flex-direction: column;
  padding-top: 10vh;
  .logo{
    width: 4.5rem;
    height: 4.5rem;
  }
  .logo-label{
    font-size: 30px;
    margin-top: 20px;
  }
  .login-form{
    width:100vw;
    margin-top: 60px;
    margin-bottom: 60px;
  }
}

</style>
