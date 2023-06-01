import { clientRequest } from '@/services/request'
import { GetUserInfoResponse } from './type'

export const userApi = {
  /**
   * 获取用户信息
   * @returns
   */
  getUserInfo: function ():Promise<GetUserInfoResponse> {
    return clientRequest.get('/gateway', {
      headers: {
        'X-Host': 'mall.user.info.get'
      }
    })
  }
}
