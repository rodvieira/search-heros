import { AxiosResponse } from 'axios'
import { AxiosHttpClient } from '../axios-http-client/axios-http-client'

type Params = {
  url: string
}

export class AxiosHttpGetClient implements AxiosHttpGetClient {
  async get(params: Params): Promise<AxiosResponse<any>> {
    const instaceAxios = new AxiosHttpClient()

    return await instaceAxios.createAxios().get(params.url)
  }
}
