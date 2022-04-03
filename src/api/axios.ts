import axios, {AxiosRequestConfig, AxiosResponse} from 'axios'
import config from '../configs/index'

export interface ResponseData {
  code: number
  data: any
  msg: string
}

const initConfig: AxiosRequestConfig = {
  baseURL: config.host,
  withCredentials: true,
}

export const fetch = axios.create(initConfig)

fetch.interceptors.request.use((request: AxiosRequestConfig) => {
  const bodyData = request?.data || {}
  const uriData = request?.params || {}
  // request.params = {
  //   data: {
  //     ...data,
  //   },
  //   appid: config.appid,
  // }
  request.data = {
    ...bodyData,
    appid: config.appid,
  }

  request.params = {
    ...uriData,
    appid: config.appid,
  }

  // request.data.appid = config.appid

  console.log(`interceptors ${JSON.stringify(request)}`)
  return request
})

fetch.interceptors.response.use(
  (response: AxiosResponse) => {
    const {data, config}: {data: ResponseData; config: AxiosRequestConfig} = response
    // const {matched, res} = apiInterceptors({
    //   response,
    //   rules: API_RULES,
    // })
    // if (matched) return res
    if (data.code !== 0) {
      return data
    }
    return data.data
  },
  (err: any) => {
    // const response = err.response
    // if (response && response.status === 401) {
    //   // 登录过期
    //   user.openLogin()
    // } else if (response && response.data) {
    //   _error(response)
    // }
    return Promise.reject(err)
  },
)
