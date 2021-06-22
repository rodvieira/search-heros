import React from 'react'

import IconFavorite from '@/assets/favorito_01.svg'
import IconTrailer from '@/assets/ic_trailer.svg'
import IconComics from '@/assets/ic_quadrinhos.svg'
import IconPositive from '@/assets/avaliacao_on.svg'

import Styles from './details-hero-styles.scss'

const DetailsHero: React.FC = () => {
  return (
    <div className={Styles.descriptionHero}>
      <div className={Styles.nameHero}>
        <h1>HULK</h1>
        <img src={IconFavorite} />
      </div>
      <p>
        O Hulk, por vezes referido como O incirível Hulk é um personagem de
        quadrinhos/banda desenhada do gênero super-herói, propriedade da 
        Marvel Comics, editora pela qual as histórias do personagem são 
        publicados desde sua criação, nos anos 1960.
      </p>
      <div className={Styles.detailsHero}>
        <div>
          <p>Quadrinhos</p>
          <img src={IconComics} alt="" />
          <span>3000</span>
        </div>
        <div>
          <p>Filmes</p>
          <img src={IconTrailer} alt="" />
          <span>25</span>
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
  )
}

export default DetailsHero