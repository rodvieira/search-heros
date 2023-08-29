import { useEffect, useState } from 'react'
import { Character } from '@/types/character'
import { CharacterRequest } from '@/service/api/characters'
import { instanceAxios } from '@/service/http/axios-http-client'

type FetchCharacterType = {
  loading: boolean
  character: Character
}

const characterAdapter = (characterToAdapt: CharacterRequest): Character => {
  return {
    id: characterToAdapt.id,
    name: characterToAdapt.name,
    description: characterToAdapt.description,
    comicsCount: characterToAdapt.comics.available,
    seriesCount: characterToAdapt.series.available,
    thumbnail: characterToAdapt.thumbnail,
  }
}

export const useFetchCharacter = (id: string): FetchCharacterType => {
  const [loading, setLoading] = useState<boolean>(true)
  const [character, setCharacter] = useState<Character>()

  const fetchCharacter = async () => {
    try {
      const { data } = await instanceAxios.get(`/characters/${id}`)
      setCharacter(characterAdapter(data.data.results[0]))
    } catch (error) {
      return error
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacter()
  }, [])

  return {
    loading,
    character,
  }
}
