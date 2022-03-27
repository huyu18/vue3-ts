import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
// ILoadingInstance=>LoadingInstance,1.0.2-beta.70升级2.0.2
import { LoadingInstance } from 'element-plus/lib/components/loading/src/loading'
import { ElLoading } from 'element-plus'

interface HYRequestInterceptors<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorCatch?: (error: any) => any
  responseInterceptor?: (res: T) => T
  responseInterceptorCatch?: (error: any) => any
}

interface HYRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: HYRequestInterceptors<T>
  showLoading?: boolean
}

const DEFAULT_LOADING = true

class HYRequest {
  instance: AxiosInstance
  interceptors?: HYRequestInterceptors
  showLoading: boolean
  loading?: LoadingInstance

  constructor(config: HYRequestConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading ?? DEFAULT_LOADING
    this.interceptors = config.interceptors

    // 从config中取出的拦截器是对应的实例的拦截器
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    )

    // 添加所有的实例都有的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            text: '加载中...',
            background: 'rgba(0,0,0,0.5)'
          })
        }

        return config
      },
      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // loading移除
        this.loading?.close()

        return res.data
      },
      (err) => {
        this.loading?.close()

        return err
      }
    )
  }

  request<T>(config: HYRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // 单个请求对config的处理
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      // 判断是否需要显示loading
      if (config.showLoading === false) {
        this.showLoading = config.showLoading
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          // 单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          console.log(res)

          // 下次请求前设置回初始值
          this.showLoading = DEFAULT_LOADING

          // 将返回的结果resolve返回出去
          resolve(res)
        })
        .catch((err) => {
          // 下次请求前设置回初始值
          this.showLoading = DEFAULT_LOADING

          reject(err)
          return err
        })
    })
  }

  get<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }
}

export default HYRequest
