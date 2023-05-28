import axios from 'axios'

const clientRequest = axios.create({
  baseURL: 'https://m.maizuo.com',
  headers: {
    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"16851707595903716016193537"}'
  }
})

clientRequest.interceptors.response.use(function (response) {
  /**
   * 状态码为 2xx 都会进入这里
   */
  return response.data
})
export { clientRequest }
