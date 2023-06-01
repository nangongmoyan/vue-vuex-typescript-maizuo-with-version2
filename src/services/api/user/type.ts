import { MaiZuoResponse } from '../../type'
import { User } from '../../../features/user'

export interface GetUserInfoResponse extends MaiZuoResponse {
  data: User;
}
