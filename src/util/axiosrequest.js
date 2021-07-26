/* axios自带封装 */
import axios from 'axios'
import { Toast } from 'vant'
const axiosrequest = axios.create({
  baseURL: 'https://m.maizuo.com/gateway',
  timeout: 10000,
  method: 'get',
  headers: { 'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16271624135679222370598913","bc":"110100"}' }
})
// axiosrequest.interceptors.request
// axiosrequest.interceptors.response
// Add a request interceptor
axiosrequest.interceptors.request.use(function (config) {
  // Do something before request is sent
  Toast.loading({
    message: '加载中...',
    forbidClick: true,
    duration: 0
  })
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
axiosrequest.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  Toast.clear()
  return response
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  Toast.clear()
  return Promise.reject(error)
})
export default axiosrequest
