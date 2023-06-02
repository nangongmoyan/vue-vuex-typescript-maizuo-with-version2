import { CinemaListResponse } from './type'
import { clientRequest } from '../../request'
import store from '@/store'

/**
 * 影院相关接口
 */
export const cinemaApi = {
  /**
   * 获取影院列表
   * @returns
   */
  cinemaList: function () :Promise<CinemaListResponse> {
    return clientRequest.get('/gateway?ticketFlag=1&k=5291942', {
      params: {
        cityId: store.state.currentCity.cityId
      },
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    })
  }
}
