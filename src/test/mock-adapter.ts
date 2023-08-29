import MockAdapter from 'axios-mock-adapter'

import { instanceAxios } from '@/service/http/axios-http-client'
import { Character } from '@/types/character'

type statusCode = 200 | 500

const mock = new MockAdapter(instanceAxios)

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

export const mockGetCharacters = (status: statusCode) => {
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

export const mockGetCharacter = (id: number, status: statusCode) => {
  const characterMock = listCharactersMock[0]
  return mock.onGet(`/characters/${id}`).reply(status, {
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

export const listComicsMock = [
  {
    title: 'Avengers Unlimited',
    thumbnail: {
      path: 'avengers-unlimited',
      extension: 'jpg',
    },
  },
  {
    title: 'X-Men Unlimited Infinity Comic',
    thumbnail: {
      path: 'x-men-unlimited',
      extension: 'jpg',
    },
  },
]

export const mockGetCharacterComics = (id: number, status: statusCode) => {
  return mock.onGet(`/characters/${id}/comics`).reply(status, {
    data: {
      results: listComicsMock,
    },
  })
}
