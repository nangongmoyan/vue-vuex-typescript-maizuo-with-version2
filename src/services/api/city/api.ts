import { clientRequest } from '../../request'
import { GetCityListResponse } from './type'
/**
 * 城市接口
 */
export const cityApi = {

  /**
   * 获取城市列表
   * @returns
   */
  getCityList: function () :Promise<GetCityListResponse> {
    return clientRequest.get('gateway?k=1678898', {
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    })
  }
}
