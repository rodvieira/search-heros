import MockAdapter from 'axios-mock-adapter'

import { instaceAxios } from '@/service/http/axios-http-client/axios-http-client'

import { listCharactersMock } from './mock-characters'

const mock = new MockAdapter(instaceAxios)

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
