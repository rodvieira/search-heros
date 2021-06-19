import { AxiosResponse } from 'axios';

export interface AxiosHttpGetClient {
  get(params: any): Promise<AxiosResponse<any>>
}