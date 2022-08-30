import React, { useEffect, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { initialState, FavoriteReducer } from '@/reducer/favorite-reducer/favorite-reducer'
import { AxiosHttpGetClient } from '@/service/http/axios-http-get-client/axios-http-get-client'
import { Container, HeaderHome, FiltersContent, FlexContent, CardHero } from '@/components'
import { Character } from '@/protocols/character'

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [state, dispatch] = useReducer(FavoriteReducer, initialState)
  const [characters, setCharacters] = useState<Character[]>([])

  const fetchCharacters = async (url: string) => {
    try {
      const http = new AxiosHttpGetClient();
      const { data } = await http.get({ url })
      setCharacters(setAttribute(data.data.results, 'favorite', false))
    } catch (error) {
      alert(error)
    }
  };

  const setAttribute = (data: Character[], attr: string, value: any) => {
    return data.map(item => {
      return {
        ...item,
        [attr]: value
      }
    })
  }

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
      thumbnail:  favoriteCharacter.thumbnail,
      favorite: event && countfavorites 
    }

    const index = characters.findIndex(item => item.id === favoriteCharacter.id)
    const newCharacters = [...characters]
    newCharacters[index].favorite = event && countfavorites 
    setCharacters(newCharacters)

    dispatch({
      type: event && countfavorites ? 'ADD_FAVORITE' : 'REMOVE_FAVORITE',
      data: { ...character }
    })
  }

  const listFavorite = (event: boolean) => {
    event ? setCharacters(state.favorites)
    : fetchCharacters('/characters?orderBy=-modified')
  } 

  const pushToHero = (id: number) => navigate(`/hero/${id}`)
  
  useEffect(() => {
    fetchCharacters('/characters?orderBy=-modified');
  }, [])

  return (
    <Container size="1200">
      <HeaderHome />
      <FiltersContent
        orderList={orderList}
        queryList={(e: string) => filterQueryList(e)}
        favoriteList={(e: boolean) => listFavorite(e)}
        amount={characters.length}
      />
      <FlexContent>
        {characters.map(character => (
          <CardHero
            character={character}
            favoriteEvent={(event: boolean) => changeFavorite(event, character)}
            onClick={() => pushToHero(character.id)}
          />
        ))}
      </FlexContent>
    </Container>
  )
}

export default Home