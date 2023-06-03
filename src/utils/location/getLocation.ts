import { locationApi } from '@/services/api'
import store from '@/store'
import { Toast } from 'vant'
export const getLocation = (showToast = false) => {
  if (showToast) {
    Toast.loading({
      message: '定位中...',
      forbidClick: true,
      duration: 0,
      icon: 'location-o'
    })
  }
  navigator.geolocation.getCurrentPosition(position => {
    const location = {
      city: {
        cityId: 440300,
        name: '深圳'
      },
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    }

    store.commit('setLocation', location)
    // locationApi.getAmpLocation(position.coords.latitude, position.coords.longitude).then(rlt => {
    //   console.log({ rlt })
    // })

    // fetch('https://restapi.amap.com/v3/geocode/regeo?key=29401357c7731ddb6a302fd65238ce18&location=22.5619141,113.8906835&extensions=all').then(response => response.json())
    // axios.get(`https://restapi.amap.com/v3/geocode/regeo?key=${key}&location=${re0+','+re1}&extensions=all`)
    // .then( (response) => {
    //   console.log('response'+response.data)
    //   if(response.data.status){

    //     } else {
    //       that.showCity = '未获取定位'

    //     }
    //   }
    // })
  }, error => {
    console.log({ error })
  }, {
    // enableHightAccuracy: false,
    timeout: 30000,
    maximumAge: 0
  })
}
