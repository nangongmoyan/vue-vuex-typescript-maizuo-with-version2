import { clientRequest } from '@/services/request'

export const locationApi = {
  getAmpLocation: function (latitude:number, longitude:number) {
    return clientRequest.get(`https://restapi.amap.com/v3/geocode/regeo?key=29401357c7731ddb6a302fd65238ce18&location=${latitude + ',' + longitude}&extensions=all`)
  }
}
