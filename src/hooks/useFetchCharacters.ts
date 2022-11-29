import { Character } from '@/protocols/character'
import { AxiosHttpGetClient } from '@/service/http/axios-http-get-client/axios-http-get-client'
import { useEffect, useState } from 'react'

type FetchCharactersType = {
  loading: boolean
  characters: Character[]
  fetchCharacters: (url: string) => Promise<void>
}

export const useFetchCharacters = (): FetchCharactersType => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false)

  const fetchCharacters = async (url: string) => {
    try {
      setLoading(true)
      const http = new AxiosHttpGetClient()
      const { data } = await http.get({ url })
      setCharacters(data.data.results)
    } catch (error) {
      return error
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacters('/characters?orderBy=-modified')
  }, [])

  return { characters, loading, fetchCharacters }
}
