import axios from 'axios'
import { interceptorLoadingElements } from './formatters'

let axiosInstance = axios.create()
axiosInstance.defaults.timeout = 1000 * 60 * 10

axiosInstance.interceptors.request.use(
  (config) => {
    interceptorLoadingElements(true)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  (response) => {
    interceptorLoadingElements(false)
    return response
  },
  (error) => {
    interceptorLoadingElements(false)
    return Promise.reject(error)
  }
)

export default axiosInstance
