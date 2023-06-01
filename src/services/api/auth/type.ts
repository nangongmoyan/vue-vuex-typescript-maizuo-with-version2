import { MaiZuoResponse } from '../../type'
import { LoginResult } from '../../../features/auth'

export interface LoginResponse extends MaiZuoResponse {
  data: LoginResult;
}
