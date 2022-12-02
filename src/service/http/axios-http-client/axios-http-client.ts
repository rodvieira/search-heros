import axios, { AxiosInstance } from 'axios'
import { AxiosHttpInstace, Params } from '../types/axios-http-instance'

export class AxiosHttpClient implements AxiosHttpInstace {
  readonly baseURL: string = 'https://gateway.marvel.com/v1/public'
  readonly params: Params = { apikey: '38e0464bf10c42601e8959017768c625' }

  createAxios(): AxiosInstance {
    return axios.create({
      baseURL: this.baseURL,
      params: this.params,
    })
  }
}
