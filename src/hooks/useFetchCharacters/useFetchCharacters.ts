import { useEffect, useState } from 'react'
import { Character } from '@/types/character'
import { CharacterParams } from '@/service/api/characters'
import { instaceAxios } from '@/service/http/axios-http-client/axios-http-client'

type FetchCharactersType = {
  loading: boolean
  characters: Character[]
  handleSetFavoriteCharacter: (characterId: number) => void
  fetchCharacters: (params?: CharacterParams) => void
}

export const useFetchCharacters = (): FetchCharactersType => {
  const [charactersList, setCharactersList] = useState<Character[]>([])
  const [loading, setLoading] = useState(false)

  const fetchCharacters = async (params?: CharacterParams) => {
    try {
      setLoading(true)
      const { data } = await instaceAxios.get('/characters', { params })
      setCharactersList(data.data.results)
    } catch (error) {
      return error
    } finally {
      setLoading(false)
    }
  }

  const handleSetFavoriteCharacter = (characterId: number) => {
    setCharactersList((oldCharacter) => {
      return oldCharacter.map((character) => {
        if (character.id !== characterId) return character

        return {
          ...character,
          favorite: !character.favorite,
        }
      })
    })
  }

  useEffect(() => {
    fetchCharacters()
  }, [])

  return {
    characters: charactersList,
    handleSetFavoriteCharacter,
    loading,
    fetchCharacters,
  }
}
