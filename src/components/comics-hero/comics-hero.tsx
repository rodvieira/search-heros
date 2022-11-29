import React from 'react'

import { Comics } from '@/protocols/comics'
import Styles from './comics-hero-styles.scss'

type Props = {
  characterComics: Comics[]
}

const ComicsHero: React.FC<Props> = ({ characterComics }: Props) => {
  return (
    <div className={Styles.contentCardComics}>
      <h2>Últimos lançamentos:</h2>
      {characterComics.map((item) => (
        <div className={Styles.cardComics} key={item.title}>
          <img
            src={`${item.thumbnail?.path}.${item.thumbnail?.extension}`}
            alt={item.title}
          />
          <span>{item?.title}</span>
        </div>
      ))}
    </div>
  )
}

export default ComicsHero
