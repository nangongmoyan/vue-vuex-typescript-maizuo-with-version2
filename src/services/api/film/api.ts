import { clientRequest } from '../../request'
import { FilmDetailResponse, FilmListResponse } from './type'

/**
 * 电影相关接口
 */
export const filmApi = {
  // https://m.maizuo.com/gateway?filmId=6328&k=9800898

  /**
   * 正在热映电影列表
   * @returns
   */
  filmList: function ({ pageNum = 1, type = '1' }):Promise<FilmListResponse> {
    return clientRequest.get('/gateway?cityId=440300', {
      params: {
        type,
        pageNum,
        k: 8089533,
        pageSize: 10
      },
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    })
  },

  /**
   * 电影详情信息
   * @param filmId
   * @returns
   */
  filmInfo: function (filmId:string) :Promise<FilmDetailResponse> {
    return clientRequest.get(`gateway?filmId=${filmId}&k=9800898`, {
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    })
  }
}
