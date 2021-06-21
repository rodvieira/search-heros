import React, { useEffect, useState } from 'react'

import { AxiosHttpGetClient } from '@/service/http/axios-http-get-client/axios-http-get-client'
import { Container, HeaderHome, FiltersContent, FlexContent, CardHero } from '@/components'

const Home: React.FC = () => {

  const [heros, setHeros] = useState([])

  const fetchCharacters = async () => {
    const req = new AxiosHttpGetClient();
    const res = await req.get({ url: '/characters' })
    const { data } = res

    setHeros(data.data.results)
  };

  useEffect(() => {
    fetchCharacters();
  }, [])
  return (
    <Container>
      <HeaderHome />
      <FiltersContent />
      <FlexContent>
        {heros.map(hero => (
          <CardHero
            thumbnail={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            name={hero.name}
          />
        ))}
      </FlexContent>
    </Container>
  )
}

export default Home