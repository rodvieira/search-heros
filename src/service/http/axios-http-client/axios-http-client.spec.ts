// import { AxiosHttpClient } from './axios-http-client'
// import axios from 'axios'

// jest.mock('axios')

// type SutTypes = {
//   sut: AxiosHttpClient
//   mockedAxios: jest.Mocked<typeof axios>
// }

// const makeSut = (): SutTypes => {
//   const sut = new AxiosHttpClient()
//   const mockedAxios = axios as jest.Mocked<typeof axios>

//   return { sut, mockedAxios }
// }

// describe('AxiosHttpClient', () => {
//   test('should create instace axios with correct values', () => {
//     const { sut, mockedAxios } = makeSut()
//     const createInstaceAxios = sut.createAxios()
//     const axiosInstace = mockedAxios.create({
//       baseURL: 'https://gateway.marvel.com/v1/public',
//       params: { apikey: '38e0464bf10c42601e8959017768c625'  }
//     })

//     expect(createInstaceAxios).toEqual(axiosInstace);
//   });
// })