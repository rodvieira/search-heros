import { Character } from '@/protocols/character'
import { AxiosHttpGetClient } from '@/service/http/axios-http-get-client/axios-http-get-client'
import { useEffect, useState } from 'react'
import { useFavorite } from './useFavorite'

type FetchCharactersType = {
  loading: boolean
  characters: Character[]
  fetchCharacters: (url: string) => Promise<void>
}

export const useFetchCharacters = (): FetchCharactersType => {
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(false)

  const { favorite } = useFavorite()

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
    const favoriteCharacters = characters.map((character) => ({
      ...character,
      favorite: favorite.includes(String(character.id)),
    }))

    setCharacters(favoriteCharacters)
  }, [favorite])

  useEffect(() => {
    fetchCharacters('/characters?orderBy=-modified')
  }, [])

  return { characters, loading, fetchCharacters }
}
