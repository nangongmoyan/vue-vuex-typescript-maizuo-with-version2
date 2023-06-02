import { SubCityItem } from '@/features/city'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

    user: JSON.parse(window.localStorage.getItem('user') || 'null'),
    city: JSON.parse(window.localStorage.getItem('city') || 'null'),
    currentCity: JSON.parse(window.localStorage.getItem('currentCity') || 'null')

    // cityId: localStorage.getItem('cityId') ? Number(localStorage.getItem('cityId')) : ''
  },
  getters: {
  },
  mutations: {

    setUser (state, payload) {
      state.user = payload

      // 为了防止页面刷新数据丢失，我们需要把 user 数据持久化
      // 注意：本地存储只能存字符串
      window.localStorage.setItem('user', JSON.stringify(payload))
    },
    setCity (state, payload) {
      state.city = payload
      window.localStorage.setItem('city', JSON.stringify(payload))
    },
    setCurrentCity (state, payload) {
      const currentCity = (state.city.origiCitys as SubCityItem[]).find(item => item.cityId === payload)
      state.currentCity = currentCity
      console.log({ currentCity })
      window.localStorage.setItem('currentCity', JSON.stringify(currentCity))
    }
  },
  actions: {
  },
  modules: {
  }
})
