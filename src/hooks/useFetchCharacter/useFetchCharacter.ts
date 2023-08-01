import { useEffect, useState } from 'react'
import { Character } from '@/types/character'
import { CharacterRequest } from '@/service/api/characters'
import { instaceAxios } from '@/service/http/axios-http-client/axios-http-client'

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
  const [loading, setLoading] = useState<boolean>(false)
  const [character, setCharacter] = useState<Character>()

  const fetchCharacter = async () => {
    try {
      setLoading(true)
      const { data } = await instaceAxios.get(`/characters/${id}`)
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
