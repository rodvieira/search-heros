import React from 'react'

import Styles from './hero-styles.scss'

import { HeaderHero, Container, DetailsHero } from '@/components'

const Hero: React.FC = () => {
  return (
    <div style={{ background: '#e7f6e7'}}>
      <HeaderHero />
      <Container size="1200">
        <DetailsHero />
      </Container>
    </div>
  )
}

export default Hero