import { CinemaListResponse } from './type'
import { clientRequest } from '../../request'
import store from '@/store'
import { TicketFlag } from '../../../features/cinema'

/**
 * 影院相关接口
 */
export const cinemaApi = {
  /**
   * 获取影院列表
   * @returns
   */
  cinemaList: function (ticketFlag:TicketFlag) :Promise<CinemaListResponse> {
    return clientRequest.get('/gateway', {
      params: {
        k: 5291942,
        type: ticketFlag,
        cityId: store.state.currentCity.cityId
      },
      headers: {
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    })
  }
}
