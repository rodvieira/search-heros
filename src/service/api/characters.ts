import { Character } from '@/types/character'
import { AxiosHttpGetClient } from '../http/axios-http-get-client/axios-http-get-client'
import { Comics } from '@/types/comics'

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
  const http = new AxiosHttpGetClient()
  const existingParams = Object.keys(params).length
    ? { params: { ...params } }
    : null
  return await http.get<DataReponse<Character[]>>('/characters', existingParams)
}

export const getCharacterById = async (id: string) => {
  const http = new AxiosHttpGetClient()
  return await http.get<DataReponse<CharacterRequest>>(`/characters/${id}`)
}

export const getCharacterComics = async (id: string) => {
  const http = new AxiosHttpGetClient()
  return await http.get<DataReponse<Comics[]>>(`/characters/${id}/comics`)
}
