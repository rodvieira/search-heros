import { Character } from '@/types/character'
import { Comics } from '@/types/comics'
import { instanceAxios } from '../http/axios-http-client'

interface DataReponse<T> {
  data: {
    results: T
  }
}

export type CharacterParams = {
  orderBy?: string
  nameStartsWith?: string
}

export type CharacterRequest = Character & {
  comics: { available: number }
  series: { available: number }
}

export const getCharacters = async (params?: CharacterParams) => {
  const existingParams = Object.keys(params || {}).length
    ? { params: { ...params } }
    : null
  return await instanceAxios.get<DataReponse<Character[]>>(
    '/characters',
    existingParams
  )
}

export const getCharacterById = async (id: string) => {
  return await instanceAxios.get<DataReponse<CharacterRequest>>(
    `/characters/${id}`
  )
}

export const getCharacterComics = async (id: string) => {
  return await instanceAxios.get<DataReponse<Comics[]>>(
    `/characters/${id}/comics`
  )
}
