import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';


import { AxiosHttpGetClient } from '@/service/http/axios-http-get-client/axios-http-get-client'
import { Container, HeaderHome, FiltersContent, FlexContent, CardHero } from '@/components'

const Home: React.FC = () => {
  const [heros, setHeros] = useState([])
  const history = useHistory()

  const fetchCharacters = async () => {
    const req = new AxiosHttpGetClient();
    const res = await req.get({ url: '/characters' })
    const { data } = res

    setHeros(data.data.results)
  };

  const pushToHero = (id: number) => history.push(`/hero/${id}`)
  
  useEffect(() => {
    fetchCharacters();
  }, [])

  return (
    <Container size="1200">
      <HeaderHome />
      <FiltersContent />
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