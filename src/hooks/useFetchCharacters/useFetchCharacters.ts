import { useEffect, useState } from 'react'
import { Character } from '@/types/character'
import { CharacterParams, getCharacters } from '@/service/api/characters'

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
      const { data } = await getCharacters({ ...params })
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
