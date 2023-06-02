import { LoginResponse } from './type'
import { clientRequest } from '../../request'

export const authApi = {

  /**
   * 发送登录验证码
   * @param mobile
   * @returns
   */
  sendSmsCode: function (mobile:string) {
    return clientRequest.post('/gateway', { mobile, type: '1' }, {
      headers: { 'X-Host': 'mall.user.sms-code.send' }
    })
  },

  /**
   *  短信登录
   * @param mobile
   * @param smsCode
   * @returns
   */
  loginBySms: function (mobile:string, smsCode:string):Promise<LoginResponse> {
    return clientRequest.post('/gateway', { mobile, smsCode }, {
      headers: { 'X-Host': 'mall.user.sms-code-login' }
    })
  }
}
