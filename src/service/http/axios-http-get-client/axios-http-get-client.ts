import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AxiosHttpClient } from '../axios-http-client/axios-http-client'

export class AxiosHttpGetClient implements AxiosHttpGetClient {
  async get<T>(
    url: string,
    params?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const instaceAxios = new AxiosHttpClient()

    return await instaceAxios.createAxios().get(url, {
      params: { ...params },
    })
  }
}
