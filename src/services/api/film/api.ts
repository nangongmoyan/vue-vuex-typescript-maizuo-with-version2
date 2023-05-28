import { clientRequest } from '../../request'
import { FilmDetailResponse, NowPalyingFilmsResponse } from './type'

/**
 * 电影相关接口
 */
export const filmApi = {
  // https://m.maizuo.com/gateway?filmId=6328&k=9800898

  /**
   * 正在热映电影列表
   * @returns
   */
  nowPalyingFilms: function ():Promise<NowPalyingFilmsResponse> {
    return clientRequest.get('/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8089533', {
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
  detail: function (filmId:string) :Promise<FilmDetailResponse> {
    return clientRequest.get(`gateway?filmId=${filmId}&k=9800898`, {
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    })
  }
}
