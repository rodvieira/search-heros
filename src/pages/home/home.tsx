import React from 'react'

import { HeaderHome, FiltersContent } from '@/components'
import Styles from './home-styles.scss'

const Home: React.FC = () => {
  return (
    <div className={Styles.home}>
      <HeaderHome />
      <FiltersContent />
    </div>
  )
}

export default Home