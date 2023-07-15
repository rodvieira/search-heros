import { useEffect, useState } from 'react'
import { getCharacterComics } from '@/service/api/characters'
import { Comics } from '@/types/comics'

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
      const { data } = await getCharacterComics(id)
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
