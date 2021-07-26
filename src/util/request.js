/* 函数封装 */
import axios from 'axios'
const request = (params, host) => {
  return axios({
    url: 'https://m.maizuo.com/gateway',
    method: 'get',
    params: params,
    headers: {
      'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16271624135679222370598913","bc":"110100"}',
      ...host
    }
  }).then(res => {
    // console.log(res.data.data.film)
    return res.data
  })
}

export default request
