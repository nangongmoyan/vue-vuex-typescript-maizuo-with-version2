import { MaiZuoResponse } from '../../type'
import { FilmDetailData } from '../../../features/film'
import { NowPalyingFilms } from '../../../features/nowPlaying'

export interface NowPalyingFilmsResponse extends MaiZuoResponse {
  data: NowPalyingFilms;
}
export interface FilmDetailResponse extends MaiZuoResponse {
  data: FilmDetailData;
}
