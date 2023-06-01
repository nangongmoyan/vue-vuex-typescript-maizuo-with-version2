<template>
  <div >
    <navigation-bar/>
    <div class="login-main">
      <img  class='logo' src="@/assets/logo.png"/>
      <div class="logo-label">墨言电影</div>
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
            placeholder="请输入短信验证码"
          >
            <template #button>
              <van-button
                size="small"
                type="primary"
                color ='#F03D37'
                @click="sendSms"
                :disabled="!smsAbled">
                  {{ smsBtnText }}
              </van-button>
            </template>
          </van-field>
        </van-cell-group>
      </van-form>
      <van-button
        block
        type="primary"
        color ='#F03D37'
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
    smsAbled ():boolean {
      return /^1[3456789]\d{9}$/.test(this.mobile) && !this.getSmsBtnDisable
    },
    loginAbled ():boolean {
      return /^1[3456789]\d{9}$/.test(this.mobile) && this.smsCode !== '' && !this.logining
    }
  },
  methods: {
    async sendSms () {
      try {
        authApi.sendSmsCode(this.mobile)
        // this.waitTime--
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
        this.$router.push((this.$route.query.redirect as string) ?? '/film')
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
  padding-top: 5vh;
  .logo{
    width: 7.5rem;
    height: 7.5rem;
  }
  .logo-label{
    font-size: 30px;
  }
  .login-form{
    width:100vw;
    margin-top: 45px;
    margin-bottom: 60px;
  }
}

</style>
