import { AxiosInstance } from 'axios';

export type Params = {
  apikey: string
}

export interface AxiosHttpInstace {
  baseURL: string
  params: Params
  createAxios(): AxiosInstance
}