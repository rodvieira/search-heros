import React from 'react'

import IconFavorite from '@/assets/favorito_01.svg'
import IconTrailer from '@/assets/ic_trailer.svg'
import IconComics from '@/assets/ic_quadrinhos.svg'
import IconPositive from '@/assets/avaliacao_on.svg'

import { Thumbnail } from '@/protocols/thumbnail'
import Styles from './details-hero-styles.scss'

type Props = {
  character: {
    name: string
    description: string
    comicsCount: number
    seriesCount: number
    thumbnail: Thumbnail
  }
}

const DetailsHero: React.FC<Props> = ({ character }: Props) => {
  return (
    <div className={Styles.contentDescriptionHero}>
      <div className={Styles.descriptionHero}>
        <div className={Styles.nameHero}>
          <h1>{character?.name}</h1>
          <img src={IconFavorite} />
        </div>
        <p>{character?.description}</p>
        <div className={Styles.detailsHero}>
          <div>
            <p>Quadrinhos</p>
            <img src={IconComics} alt="" />
            <span>{character?.comicsCount}</span>
          </div>
          <div>
            <p>Filmes</p>
            <img src={IconTrailer} alt="" />
            <span>{character?.seriesCount}</span>
          </div>
        </div>
        <div className={Styles.rating}>
          <span>Rating:</span>
          <img src={IconPositive} alt="" />
        </div>
        <div className={Styles.lastComics}>
          <span>Último quadrinho:</span>
          <span>13 fev. 2020</span>
        </div>
      </div>
      <div className={Styles.characterThumbnail}>
        <img src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`} />
      </div>
    </div>
  )
}

export default DetailsHero