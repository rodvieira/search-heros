import React from 'react'

import Styles from './hero-styles.scss'

import { HeaderHero, Container } from '@/components'

const Hero: React.FC = () => {
  return (
    <div style={{ background: '#e7f6e7'}}>
      <HeaderHero />
      <Container size="1200">
      </Container>
    </div>
  )
}

export default Hero