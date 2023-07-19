import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { instaceAxios } from '../axios-http-client/axios-http-client'

export class AxiosHttpGetClient implements AxiosHttpGetClient {
  async get<T>(
    url: string,
    params?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    return await instaceAxios.get(url, {
      params: { ...params },
    })
  }
}
