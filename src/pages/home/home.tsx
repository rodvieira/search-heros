import React from 'react'
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
import { useFetchCharacters } from '@/hooks/useFetchCharacters'
import { useFavorite } from '@/hooks/useFavorite'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const { handleSetFavorite, handleRemoveFavorite } = useFavorite()
  const { characters, fetchCharacters, handleOnlyFavorites, loading } =
    useFetchCharacters()

  const orderList = (order: boolean) => {
    const url = `/characters?orderBy=${order ? 'name' : '-modified'}`
    fetchCharacters(url)
  }

  const filterQueryList = (query: string) => {
    const url = `/characters?nameStartsWith=${query}`
    fetchCharacters(query ? url : '/characters?orderBy=-modified')
  }

  const handleFavorite = (favoriteCharacter: Character) => {
    !favoriteCharacter.favorite
      ? handleSetFavorite(String(favoriteCharacter.id))
      : handleRemoveFavorite(String(favoriteCharacter.id))
  }

  const handleFavoritesList = () => handleOnlyFavorites()

  const pushToHero = (id: number) => navigate(`/hero/${id}`)

  return (
    <Container size="1200">
      <HeaderHome />
      <FiltersContent
        orderList={orderList}
        queryList={(e: string) => filterQueryList(e)}
        favoriteList={handleFavoritesList}
        amount={characters.length}
      />
      {loading ? (
        <Loading />
      ) : (
        <FlexContent>
          {characters.map((character) => (
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
