import axios from 'axios'
import config from '../config'

const axiosIns = axios.create({
  baseURL: process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
})

axiosIns.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

axiosIns.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default axiosIns
