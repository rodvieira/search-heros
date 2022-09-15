import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

import { HeaderHero, Container, DetailsHero, ComicsHero } from '@/components'
import { AxiosHttpGetClient } from '@/service/http/axios-http-get-client/axios-http-get-client';
import { Character } from '@/protocols/character';
import { Comics } from '@/protocols/comics';

const Hero: React.FC = () => {
  const { id }: any = useParams();

  const [character, setCharacter] = useState<Character>();
  const [characterComics, setCharacterComics] = useState<Comics[]>([])

  const fetchCharacter = async () => {
    const req = new AxiosHttpGetClient();
    const res = await req.get({ url: `/characters/${id}` })
    const res2 = await req.get({ url: `/characters/${id}/comics?orderBy=onsaleDate&limit=10` })

    const dataCharacter = res.data.data.results[0]
    const dataCharacterComics = res2.data.data.results

    setCharacter({
      id: dataCharacter.id,
      name: dataCharacter.name,
      description: dataCharacter.description,
      comicsCount: dataCharacter.comics.available,
      seriesCount: dataCharacter.series.available,
      thumbnail: dataCharacter.thumbnail
    })

    const newCharacterComics = dataCharacterComics.map(item => {
      return {
        title: item.title,
        thumbnail: item.thumbnail
      }
    })

    setCharacterComics(newCharacterComics)
  };

  useEffect(() => {
    fetchCharacter()
  }, [])

  return (
    <div style={{ background: '#e7f6e7', flex: '1 0 auto'}}>
      <HeaderHero />
      <Container size="1200">
        <DetailsHero character={character} />
        <ComicsHero characterComics={characterComics} />
      </Container>
    </div>
  )
}

export default Hero