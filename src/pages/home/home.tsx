import React, { useEffect, useReducer, useState } from 'react'
import { useHistory } from 'react-router-dom';

import { initialState, FavoriteReducer } from '@/reducer/favorite-reducer/favorite-reducer'
import { AxiosHttpGetClient } from '@/service/http/axios-http-get-client/axios-http-get-client'
import { Container, HeaderHome, FiltersContent, FlexContent, CardHero } from '@/components'
import { Character } from '@/protocols/character'

const Home: React.FC = () => {
  const history = useHistory()
  const [state, dispatch] = useReducer(FavoriteReducer, initialState)
  const [characters, setCharacters] = useState<Character[]>([])

  const fetchCharacters = async (url: string) => {
    try {
      const http = new AxiosHttpGetClient();
      const { data } = await http.get({ url })
      setCharacters(data.data.results)
    } catch (error) {
      alert(error)
    }
  };

  const orderList = (order: Boolean) => {
    const url = `/characters?orderBy=${order ? 'name' : '-modified'}`
    fetchCharacters(url)
  }

  const filterQueryList = (query: string) => {
    const url = `/characters?nameStartsWith=${query}`
    fetchCharacters(query ? url : '/characters?orderBy=-modified')
  }

  const changeFavorite = (event: Boolean, favoriteCharacter: Character) => {
    const character = {
      id: favoriteCharacter.id,
      name: favoriteCharacter.name,
      thumbnail:  favoriteCharacter.thumbnail
    }

    dispatch({
      type: event ? 'ADD_FAVORITE' : 'REMOVE_FAVORITE',
      data: { ...character }
    })
  }

  const pushToHero = (id: number) => history.push(`/hero/${id}`)
  
  useEffect(() => {
    fetchCharacters('/characters?orderBy=-modified');
  }, [])
  useEffect(() => {
    console.log(state)
  }, [state])

  return (
    <Container size="1200">
      <HeaderHome />
      <FiltersContent
        orderList={orderList}
        queryList={(e: string) => filterQueryList(e)}
        amount={characters.length}
      />
      <FlexContent>
        {characters.map(character => (
          <CardHero
            favoriteEvent={(event: Boolean) => changeFavorite(event, character)}
            thumbnail={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            name={character.name}
            onClick={() => pushToHero(character?.id)}
          />
        ))}
      </FlexContent>
    </Container>
  )
}

export default Home