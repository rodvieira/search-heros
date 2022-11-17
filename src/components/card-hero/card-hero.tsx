import React from 'react'

import { Favorite } from '@/components'
import Styles from './card-hero-styles.scss'
import { Character } from '@/protocols/character'

type Props = {
  character: Character
  onClick: () => void
  favoriteEvent: (event: boolean) => void
}

const CardHero: React.FC<Props> = ({ character, onClick, favoriteEvent }: Props) => {
  return (
    <div className={Styles.cardHero} >
      <a data-testid="character-link" className={Styles.thumbnail} onClick={onClick}>
        <img data-testid="character-image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
      </a>
      <div className={Styles.infoHero}>
        <span data-testid="character-name">{character.name}</span>
        <Favorite favorite={character.favorite} onClick={(event: boolean) => favoriteEvent(event)}/>
      </div>
    </div>
  )
}

export default CardHero