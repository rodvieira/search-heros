import React, { createContext, useState } from 'react'
import { Character } from '@/types/character'

type FavoriteContextType = {
  favorites: Character[]
  handleSetFavorite: (character: Character) => void
  handleRemoveFavorite: (character: Character) => void
}

type Props = {
  children: React.ReactNode
}

export const FavoriteContext = createContext<FavoriteContextType>(null)

export const FavoriteProvider: React.FC<Props> = ({ children }) => {
  const [favorites, setFavorites] = useState<Character[]>([])

  const handleSetFavorite = (character: Character) => {
    if (favorites.length < 5)
      setFavorites([...favorites, { ...character, favorite: true }])
  }

  const handleRemoveFavorite = (character: Character) => {
    setFavorites([
      ...favorites.filter((idFavorite) => idFavorite !== character),
    ])
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorites,
        handleSetFavorite,
        handleRemoveFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}
