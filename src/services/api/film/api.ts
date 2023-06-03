import store from '@/store'
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
    return clientRequest.get('/gateway', {
      params: {
        k: 8089533,
        cityId: store.state.currentCity.cityId
      },
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
    return clientRequest.get('/gateway', {
      headers: { 'X-Host': 'mall.film-ticket.film.list' },
      params: {
        type,
        pageNum,
        k: 8089533,
        pageSize: 8,
        unToast: pageNum > 1,
        cityId: store.state.currentCity.cityId
      }
    })
  },

  /**
   * 电影详情信息
   * @param filmId
   * @returns
   */
  filmInfo: function (filmId:string) :Promise<FilmDetailResponse> {
    return clientRequest.get('/gateway', {
      params: { filmId, k: 9800898 },
      headers: { 'X-Host': 'mall.film-ticket.film.info' }
    })
  }
}
