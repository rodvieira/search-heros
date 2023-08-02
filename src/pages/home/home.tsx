import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  Container,
  HeaderHome,
  FiltersContent,
  FlexContent,
  CardHero,
  Loading,
} from '@/components'
import { Character } from '@/types/character'
import { useFetchCharacters } from '@/hooks/useFetchCharacters/useFetchCharacters'
import { useFavorite } from '@/hooks/useFavorite/useFavorite'

const Home: React.FC = () => {
  const [justFavorites, setJustFavorites] = useState(false)
  const navigate = useNavigate()

  const { handleSetFavorite, handleRemoveFavorite, favorites } = useFavorite()
  const { characters, fetchCharacters, loading, handleSetFavoriteCharacter } =
    useFetchCharacters()

  const orderList = (order: boolean) => {
    fetchCharacters({ orderBy: order && 'name' })
  }

  const filterQueryList = (query: string) => {
    if (query) {
      fetchCharacters({ nameStartsWith: query })
    }
  }

  const handleFavorite = (favoriteCharacter: Character) => {
    !favoriteCharacter.favorite
      ? handleSetFavorite(favoriteCharacter)
      : handleRemoveFavorite(favoriteCharacter)

    handleSetFavoriteCharacter(favoriteCharacter.id)
  }

  const pushToHero = (id: number) => navigate(`/hero/${id}`)

  return (
    <Container size="1200">
      <HeaderHome />
      <FiltersContent
        orderList={orderList}
        queryList={(e: string) => filterQueryList(e)}
        favoriteList={() => setJustFavorites(!justFavorites)}
        amount={characters.length}
      />
      {loading ? (
        <Loading />
      ) : (
        <FlexContent>
          {justFavorites
            ? favorites.map((character) => (
                <CardHero
                  key={character.id}
                  character={character}
                  favoriteEvent={() => handleFavorite(character)}
                  onClick={() => pushToHero(character.id)}
                />
              ))
            : characters.map((character) => (
                <CardHero
                  key={character.id}
                  character={character}
                  favoriteEvent={() => handleFavorite(character)}
                  onClick={() => pushToHero(character.id)}
                />
              ))}
        </FlexContent>
      )}
    </Container>
  )
}

export default Home
