import React, { memo } from 'react'

import { Logo } from '@/components'
import Styles from './header-home-styles.scss'

const HeaderHome: React.FC = () => {
  return (
    <div className={Styles.headerHome}>
      <Logo data-testid="logo" />
      <h2 data-testid="title">EXPLORE O UNIVERSO</h2>
      <p data-testid="description">
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve!
      </p>
    </div>
  )
}

export default memo(HeaderHome)
