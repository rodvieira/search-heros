import React, { createContext, useState } from 'react'

type FavoriteContextType = {
  favorite: string[]
  handleSetFavorite: (id: string) => void
  handleRemoveFavorite: (id: string) => void
}

type Props = {
  children: React.ReactNode
}

export const FavoriteContext = createContext<FavoriteContextType>({
  favorite: [],
  handleSetFavorite: (e) => e,
  handleRemoveFavorite: (e) => e,
})

export const FavoriteProvider: React.FC<Props> = ({ children }) => {
  const [favorite, setFavorite] = useState<string[]>([])

  const handleSetFavorite = (id: string) => {
    if (favorite.length < 5) setFavorite([...favorite, id])
  }

  const handleRemoveFavorite = (id: string) => {
    setFavorite([...favorite.filter((idFavorite) => idFavorite !== id)])
  }

  return (
    <FavoriteContext.Provider
      value={{
        favorite,
        handleSetFavorite,
        handleRemoveFavorite,
      }}
    >
      {children}
    </FavoriteContext.Provider>
  )
}
