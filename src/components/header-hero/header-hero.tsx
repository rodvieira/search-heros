import React from 'react'

import { Container } from '@/components'

import IconLogo from '@/assets/logo_menor.svg'
import Styles from './header-hero-styles.scss'

const HeaderHero: React.FC = () => {
  return (
    <Container size="1400">
      <div className={Styles.headerHero}>
        <img src={IconLogo} />
      </div>
    </Container>
  )
}

export default HeaderHero