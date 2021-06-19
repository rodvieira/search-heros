import axios, { AxiosInstance } from 'axios'

export class AxiosHttpClient {
  private readonly baseURL: string = 'https://api.github.com/'
  private readonly headers: object = { 'Content-Type': 'application/json'  }

  createAxios(): AxiosInstance {
    return axios.create({
      baseURL: this.baseURL,
      headers: this.headers
    })
  }
}