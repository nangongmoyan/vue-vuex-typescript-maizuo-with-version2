import { clientRequest } from '../../request'
import { FilmBannerResponse, FilmDetailResponse, FilmListResponse } from './type'

/**
 * 电影相关接口
 */
export const filmApi = {

  /**
   * 电影banner
   * @returns
   */
  filmBanner: function ():Promise<FilmBannerResponse> {
    return clientRequest.get('/gateway?cityId=440300&k=5073899', {
      headers: {
        'X-Host': 'mall.cfg.film-float.banner'
      }
    })
  },

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
        pageSize: 8

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
