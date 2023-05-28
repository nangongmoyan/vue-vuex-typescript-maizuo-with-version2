import { FilmItem } from '../../film'

export interface NowPalyingFilms {
  films: FilmItem[]
  total:number

}

export interface NowPlayingData {
  films:FilmItem[]
}
