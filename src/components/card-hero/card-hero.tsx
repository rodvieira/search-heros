import React from 'react'
import IconFavorite from '@/assets/favorito_01.svg'
import Styles from './card-hero-styles.scss'

type Props = {
  thumbnail: string
  name: string
  onClick: Function
}

const CardHero: React.FC<Props> = ({ thumbnail, name, onClick }: Props) => {
  return (
    <div className={Styles.cardHero} onClick={() => onClick()}>
      <div className={Styles.thumbnail}>
        <img src={thumbnail} />
      </div>
      <div className={Styles.infoHero}>
        <span>{name}</span>
        <img src={IconFavorite} />
      </div>
    </div>
  )
}

export default CardHero