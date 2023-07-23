import { instaceAxios } from '@/service/http/axios-http-client/axios-http-client'
import { Character } from '@/types/character'
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

export const listCharactersMock: Character[] = [
  {
    id: 10,
    name: 'A Bomb',
    description: 'This is a hero A Bomb',
    comicsCount: 100,
    seriesCount: 50,
    thumbnail: {
      path: '',
      extension: '',
    },
    favorite: true,
  },
  {
    id: 20,
    name: 'AIM',
    description: 'This is a hero AIM',
    comicsCount: 50,
    seriesCount: 25,
    thumbnail: {
      path: '',
      extension: '',
    },
    favorite: false,
  },
]

export const succesResponseOrdenerByName = {
  data: {
    results: listCharactersMock,
  },
}

export const mockGetCharactersOrdenedByName = (params: { orderBy: string }) => {
  return mock
    .onGet('/characters', { params })
    .reply(200, succesResponseOrdenerByName)
}
