import axios from 'axios'
import { message } from 'ant-design-vue'
import store from '@/store'
import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  // baseURL: '/api/agent-bff', // api的base_url
  timeout: 20000, // 请求超时时间
})

// 为Promise添加一些方法
Promise.prototype.finally = function finallyFn(callback) {
  const P = this.constructor
  return this.then(
    value => P.resolve(callback()).then(() => value),
    reason => P.resolve(callback()).then(() => { throw reason }),
  )
}
Promise.prototype.h_then = function then(success = () => { }, error = () => { }) {
  return this.then(data => success(data)).catch((err) => {
    console.log('err = ', err)
    return error(err)
  })
}

// request拦截器
service.interceptors.request.use((config) => {
  if (store.getters.token) {
    config.headers.token = getToken()
  }
  return config
})

// respone拦截器
service.interceptors.response.use(
  (response) => {
    const res = response.data
    if (res.code !== 200) {
      message.error(res.msg)
    }
    return res
  },
  (error) => {
    console.log(`err${error}`)// for debug
  },
)

export default service
export const { get, post } = service
