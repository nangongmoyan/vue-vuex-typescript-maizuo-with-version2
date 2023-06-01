import store from '@/store'
import axios from 'axios'

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
  return config
}, function (error) {
  return Promise.reject(error)
})
clientRequest.interceptors.response.use(function (response) {
  /**
   * 状态码为 2xx 都会进入这里
   */
  return response.data
})
export { clientRequest }
