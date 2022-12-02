import { Character } from '@/types/character'
import { AxiosHttpGetClient } from '@/service/http/axios-http-get-client/axios-http-get-client'
import { useEffect, useState } from 'react'
import { useFavorite } from './useFavorite'

type FetchCharactersType = {
  loading: boolean
  characters: Character[]
  fetchCharacters: (url: string) => Promise<void>
  handleOnlyFavorites: () => void
}

export const useFetchCharacters = (): FetchCharactersType => {
  const [charactersList, setCharactersList] = useState<Character[]>([])
  const [onlyFavorites, setOnlyFavorites] = useState(false)
  const [loading, setLoading] = useState(false)

  const { favorite } = useFavorite()

  const fetchCharacters = async (url: string) => {
    try {
      setLoading(true)
      const http = new AxiosHttpGetClient()
      const { data } = await http.get({ url })
      setCharactersList(data.data.results)
    } catch (error) {
      return error
    } finally {
      setLoading(false)
    }
  }

  const handleOnlyFavorites = () => setOnlyFavorites(!onlyFavorites)

  const handleList = () =>
    charactersList.map((character) => ({
      ...character,
      favorite: favorite.includes(String(character.id)),
    }))

  const handleFavoritesList = () =>
    charactersList.filter((character) =>
      favorite.includes(String(character.id))
    )

  useEffect(() => {
    setCharactersList(handleList())
  }, [favorite])

  useEffect(() => {
    fetchCharacters('/characters?orderBy=-modified')
  }, [])

  return {
    characters: onlyFavorites ? handleFavoritesList() : charactersList,
    loading,
    fetchCharacters,
    handleOnlyFavorites,
  }
}
