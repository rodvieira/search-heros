import React from 'react'

import { Favorite } from '@/components'
import Styles from './card-hero-styles.scss'
import { Character } from '@/protocols/character'

type Props = {
  character: Character
  onClick: Function
  favoriteEvent: Function
}

const CardHero: React.FC<Props> = ({ character, onClick, favoriteEvent }: Props) => {
  return (
    <div className={Styles.cardHero}>
      <div className={Styles.thumbnail} onClick={() => onClick()}>
        <img src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
      </div>
      <div className={Styles.infoHero}>
        <span>{character.name}</span>
        <Favorite favorite={character.favorite} onClick={(event: Boolean) => favoriteEvent(event)}/>
      </div>
    </div>
  )
}

export default CardHero