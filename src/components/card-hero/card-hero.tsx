import React from 'react'

import { Favorite } from '@/components'
import Styles from './card-hero-styles.scss'

type Props = {
  thumbnail: string
  name: string
  onClick: Function
  favoriteEvent: Function
}

const CardHero: React.FC<Props> = ({ thumbnail, name, onClick, favoriteEvent }: Props) => {
  return (
    <div className={Styles.cardHero}>
      <div className={Styles.thumbnail} onClick={() => onClick()}>
        <img src={thumbnail} />
      </div>
      <div className={Styles.infoHero}>
        <span>{name}</span>
        <Favorite onClick={(event: Boolean) => favoriteEvent(event)}/>
      </div>
    </div>
  )
}

export default CardHero