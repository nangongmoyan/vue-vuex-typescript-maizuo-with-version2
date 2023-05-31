import { MaiZuoResponse } from '../../type'
import { FilmBanner, FilmItem, FilmList } from '../../../features/film'

export interface FilmListResponse extends MaiZuoResponse {
  data: FilmList;
}
export interface FilmDetailResponse extends MaiZuoResponse {
  data: {
    film:FilmItem
  };
}

export interface FilmBannerResponse extends MaiZuoResponse {
  data: FilmBanner
}
