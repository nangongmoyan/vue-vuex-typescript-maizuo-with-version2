import { MaiZuoResponse } from '../../type'
import { SubCityItem } from '../../../features/city'

export interface GetCityListResponse extends MaiZuoResponse {
  data: { cities:SubCityItem[] };
}
