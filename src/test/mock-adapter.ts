import MockAdapter from 'axios-mock-adapter'

import { instaceAxios } from '@/service/http/axios-http-client/axios-http-client'
import { Character } from '@/types/character'

const mock = new MockAdapter(instaceAxios)

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

const succesResponse = {
  data: {
    results: listCharactersMock,
  },
}

export const mockGetCharacters = (status: 200 | 500) => {
  const response = status === 200 ? succesResponse : null

  return mock.onGet('/characters').reply(status, response)
}

const succesResponseOrdenerByName = {
  data: {
    results: listCharactersMock,
  },
}

export const mockGetCharactersOrdenedByName = (params: { orderBy: string }) => {
  return mock
    .onGet('/characters', { params })
    .reply(200, succesResponseOrdenerByName)
}

export const mockGetCharacter = (id: number) => {
  const characterMock = listCharactersMock[0]
  return mock.onGet(`/characters/${id}`).reply(200, {
    data: {
      results: [
        {
          ...characterMock,
          comics: {
            available: characterMock.comicsCount,
          },
          series: {
            available: characterMock.seriesCount,
          },
        },
      ],
    },
  })
}
