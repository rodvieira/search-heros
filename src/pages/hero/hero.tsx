import React from 'react'
import { useParams } from 'react-router-dom'

import {
  HeaderHero,
  Container,
  DetailsHero,
  ComicsHero,
  Loading,
} from '@/components'
import { useFetchCharacter } from '@/hooks/useFetchCharacter/useFetchCharacter'
import { useFetchCharacterComics } from '@/hooks/useFetchCharacterComics/useFetchCharacterComics'

const Hero: React.FC = () => {
  const { id } = useParams()
  const { loading, character } = useFetchCharacter(id)
  const { characterComics } = useFetchCharacterComics(id)

  return (
    <div style={{ background: '#e7f6e7', flex: '1 0 auto' }}>
      <HeaderHero />
      <Container size="1200">
        {loading ? <Loading /> : <DetailsHero character={character} />}
        <ComicsHero characterComics={characterComics} />
      </Container>
    </div>
  )
}

export default Hero
