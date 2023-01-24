import React from 'react'

import { Comics } from '@/types/comics'
import Styles from './comics-hero-styles.scss'

type Props = {
  characterComics: Comics[]
}

const ComicsHero: React.FC<Props> = ({ characterComics }: Props) => {
  return (
    <div className={Styles.contentCardComics}>
      <h2>Últimos lançamentos:</h2>
      {characterComics.map((item) => (
        <div
          className={Styles.cardComics}
          key={item.title}
          data-testid="comics-wrap"
        >
          <img
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt={item.title}
          />
          <span data-testid="comics-title">{item.title}</span>
        </div>
      ))}
    </div>
  )
}

export default ComicsHero
