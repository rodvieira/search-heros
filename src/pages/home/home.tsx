import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';


import { AxiosHttpGetClient } from '@/service/http/axios-http-get-client/axios-http-get-client'
import { Container, HeaderHome, FiltersContent, FlexContent, CardHero } from '@/components'

const Home: React.FC = () => {
  const [heros, setHeros] = useState([])
  const history = useHistory()

  const fetchCharacters = async (url: string) => {
    try {
      const http = new AxiosHttpGetClient();
      const { data } = await http.get({ url })
      setHeros(data.data.results)
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

  const pushToHero = (id: number) => history.push(`/hero/${id}`)
  
  useEffect(() => {
    fetchCharacters('/characters?orderBy=-modified');
  }, [])

  return (
    <Container size="1200">
      <HeaderHome />
      <FiltersContent
        orderList={orderList}
        queryList={(e: string) => filterQueryList(e)}
        amount={heros.length}
      />
      <FlexContent>
        {heros.map(hero => (
          <CardHero
            thumbnail={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            name={hero.name}
            onClick={() => pushToHero(hero.id)}
          />
        ))}
      </FlexContent>
    </Container>
  )
}

export default Home