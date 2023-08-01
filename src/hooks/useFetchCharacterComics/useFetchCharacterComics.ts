import { useEffect, useState } from 'react'
import { Comics } from '@/types/comics'
import { instaceAxios } from '@/service/http/axios-http-client/axios-http-client'

type FetchCharacterComicsType = {
  loading: boolean
  characterComics: Comics[]
}

export const useFetchCharacterComics = (
  id: string
): FetchCharacterComicsType => {
  const [loading, setLoading] = useState<boolean>(false)
  const [characterComics, setCharacterComics] = useState<Comics[]>([])

  const fetchCharacterComics = async () => {
    try {
      setLoading(true)
      const { data } = await instaceAxios.get(`/characters/${id}/comics`)
      setCharacterComics(data.data.results)
    } catch (error) {
      return error
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCharacterComics()
  }, [])

  return {
    loading,
    characterComics,
  }
}
