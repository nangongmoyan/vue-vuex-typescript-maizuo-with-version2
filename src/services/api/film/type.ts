import { MaiZuoResponse } from '../../type'
import { FilmItem, FilmList } from '../../../features/film'

export interface FilmListResponse extends MaiZuoResponse {
  data: FilmList;
}
export interface FilmDetailResponse extends MaiZuoResponse {
  data: {
    film:FilmItem
  };
}
