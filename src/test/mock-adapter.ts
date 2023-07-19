import { instaceAxios } from '@/service/http/axios-http-client/axios-http-client'
import MockAdapter from 'axios-mock-adapter'

const mock = new MockAdapter(instaceAxios)

const succesResponse = {
  data: {
    results: [
      {
        id: 10,
        name: 'Hulk',
        description: 'This is a hero Hulk',
        comicsCount: 100,
        seriesCount: 50,
        thumbnail: '',
        favorite: true,
      },
      {
        id: 20,
        name: 'Wolman Hulk',
        description: 'This is a hero Wolman Hulk',
        comicsCount: 50,
        seriesCount: 25,
        thumbnail: '',
        favorite: false,
      },
    ],
  },
}

export const mockGetCharacters = (status: 200 | 500) => {
  const response = status === 200 ? succesResponse : null

  return mock.onGet('/characters').reply(status, response)
}
