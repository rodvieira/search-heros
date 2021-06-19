import { AxiosResponse } from 'axios';
import { AxiosHttpClient } from '../axios-http-client/axios-http-client';

export class AxiosHttpGetClient implements AxiosHttpGetClient {
  async get(params: any): Promise<AxiosResponse<any>> {
    const instaceAxios = new AxiosHttpClient()

    return await instaceAxios.createAxios().get(params.url)
  }
}