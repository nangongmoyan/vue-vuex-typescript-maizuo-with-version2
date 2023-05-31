import { clientRequest } from '@/services/request'

/**
 * 影院相关接口
 */
export const cinemaApi = {
  /**
   * 获取影院列表
   * @returns
   */
  cinemaList: function () {
    return clientRequest.get('/gateway?cityId=440300&ticketFlag=1&k=5291942')
  }
}