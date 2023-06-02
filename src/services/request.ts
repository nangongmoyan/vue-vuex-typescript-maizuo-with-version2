import store from '@/store'
import axios from 'axios'
import { Toast } from 'vant'
const clientRequest = axios.create({
  baseURL: 'https://m.maizuo.com',
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16851707595903716016193537"}'
  }
})

// 请求拦截器
clientRequest.interceptors.request.use(function (config) {
  /** 我们就在这里通过改写 config 配置信息来实现业务功能的统一处理 */
  const { user } = store.state
  if (user && user.token) {
    Object.assign(config.headers, {
      'X-Token': user.token
    })
  }
  Toast.loading({
    message: '玩命加载...',
    forbidClick: true,
    loadingType: 'spinner',
    duration: 0
  })
  return config
}, function (error) {
  return Promise.reject(error)
})
clientRequest.interceptors.response.use(function (response) {
  /**
   * 状态码为 2xx 都会进入这里
   */
  Toast.clear()
  return response.data
}, function (error) {
  Toast.clear()
  Toast.fail('加载失败，请稍后重试')
  return Promise.reject(error)
})
export { clientRequest }
