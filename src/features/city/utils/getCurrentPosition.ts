import store from '@/store'
import { Toast } from 'vant'
import { GetCurrentPositionParams } from '../modules'
export const getCurrentPosition = ({ showToast = false, needReGet = false }:GetCurrentPositionParams) => {
  const { location } = store.state

  if (!location || needReGet) {
    navigator.geolocation.getCurrentPosition(position => {
      if (showToast) {
        Toast.loading({
          message: '定位中...',
          forbidClick: true,
          duration: 0,
          icon: 'location-o'
        })
      }

      /** 获取经纬度 */
      const { latitude, longitude } = position.coords
      /** 根据经纬度逆地理编码获取定位城市数据 */
      // locationApi.getAmpLocation(position.coords.latitude, position.coords.longitude).then(rlt => {
      //   console.log({ rlt })
      // })

      const location = {
        /** 当前定位匹配地址中的数据 */
        city: {
          cityId: 440300,
          name: '深圳'
        },
        latitude,
        longitude
      }

      store.commit('setLocation', location)
      store.commit('setCurrentCity', 440300)
      setTimeout(() => {
        Toast.clear()
      }, 1000)
    }, _ => {
      const { city } = store.state
      store.commit('setCurrentCity', city?.hotCitys[0].cityId)
      Toast.clear()
      Toast.fail('定位失败，暂时定位为随机热门城市')
    }, {
      // enableHightAccuracy: false,
      timeout: 30000,
      maximumAge: 0
    })
  }
}
