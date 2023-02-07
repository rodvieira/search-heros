import axios, { AxiosInstance } from 'axios'
import { AxiosHttpInstace, Params } from '../types/axios-http-instance'

export class AxiosHttpClient implements AxiosHttpInstace {
  readonly baseURL: string = process.env.API_URL
  readonly params: Params = { apikey: process.env.API_KEY }

  createAxios(): AxiosInstance {
    return axios.create({
      baseURL: this.baseURL,
      params: this.params,
    })
  }
}
