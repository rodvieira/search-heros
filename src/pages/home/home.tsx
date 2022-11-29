import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'

import {
  initialState,
  FavoriteReducer,
} from '@/reducer/favorite-reducer/favorite-reducer'
import {
  Container,
  HeaderHome,
  FiltersContent,
  FlexContent,
  CardHero,
  Loading,
} from '@/components'
import { Character } from '@/protocols/character'
import { useFetchCharacters } from '@/hooks/useFetchCharacters'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(FavoriteReducer, initialState)
  const { characters, fetchCharacters, loading } = useFetchCharacters()

  // const setAttribute = (data: Character[], attr: string, value: any) => {
  //   return data.map((item) => {
  //     return {
  //       ...item,
  //       [attr]: value,
  //     }
  //   })
  // }

  const orderList = (order: boolean) => {
    const url = `/characters?orderBy=${order ? 'name' : '-modified'}`
    fetchCharacters(url)
  }

  const filterQueryList = (query: string) => {
    const url = `/characters?nameStartsWith=${query}`
    fetchCharacters(query ? url : '/characters?orderBy=-modified')
  }

  const changeFavorite = (event: boolean, favoriteCharacter: Character) => {
    const countfavorites = state.favorites.length < 5

    const character = {
      id: favoriteCharacter.id,
      name: favoriteCharacter.name,
      thumbnail: favoriteCharacter.thumbnail,
      favorite: event && countfavorites,
    }

    const index = characters.findIndex(
      (item) => item.id === favoriteCharacter.id
    )
    const newCharacters = [...characters]
    newCharacters[index].favorite = event && countfavorites

    dispatch({
      type: event && countfavorites ? 'ADD_FAVORITE' : 'REMOVE_FAVORITE',
      data: { ...character },
    })
  }

  const pushToHero = (id: number) => navigate(`/hero/${id}`)

  return (
    <Container size="1200">
      <HeaderHome />
      <FiltersContent
        orderList={orderList}
        queryList={(e: string) => filterQueryList(e)}
        favoriteList={(e: boolean) => e}
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
              favoriteEvent={(event: boolean) =>
                changeFavorite(event, character)
              }
              onClick={() => pushToHero(character.id)}
            />
          ))}
        </FlexContent>
      )}
    </Container>
  )
}

export default Home
