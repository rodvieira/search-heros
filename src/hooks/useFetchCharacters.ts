import { useEffect, useState } from 'react'
import { Character } from '@/types/character'
import { useFavorite } from './useFavorite'
import { CharacterParams } from '@/service/api/characters'
import { instaceAxios } from '@/service/http/axios-http-client/axios-http-client'

type FetchCharactersType = {
  loading: boolean
  characters: Character[]
  fetchCharacters: (params?: CharacterParams) => void
  handleOnlyFavorites: () => void
}

export const useFetchCharacters = (): FetchCharactersType => {
  const [charactersList, setCharactersList] = useState<Character[]>([])
  const [onlyFavorites, setOnlyFavorites] = useState(false)
  const [loading, setLoading] = useState(false)

  const { favorite } = useFavorite()

  const fetchCharacters = async (params?: CharacterParams) => {
    try {
      setLoading(true)
      const { data } = await instaceAxios.get('/characters')
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
    fetchCharacters()
  }, [])

  return {
    characters: onlyFavorites ? handleFavoritesList() : charactersList,
    loading,
    fetchCharacters,
    handleOnlyFavorites,
  }
}
