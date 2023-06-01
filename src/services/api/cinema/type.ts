import { MaiZuoResponse } from '../../type'
import { CinemaList } from '../../../features/cinema'

export interface CinemaListResponse extends MaiZuoResponse {
  data: CinemaList;
}
