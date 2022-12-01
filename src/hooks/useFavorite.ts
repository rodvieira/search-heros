import { FavoriteContext } from '@/contexts/favorite-context'
import { useContext } from 'react'

export const useFavorite = () => {
  const favoriteContext = useContext(FavoriteContext)

  if (!favoriteContext)
    throw new Error('useFavorite must be used within a CountProvider')

  return favoriteContext
}
