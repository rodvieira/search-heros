import React, { useState } from 'react'
import IconHeroi from '@/assets/ic_heroi.svg'
import IconFavoriteOn from '@/assets/favorito_01.svg'
import IconFavoriteOff from '@/assets/favorito_02.svg'
import { InputSearch, Toggle } from '@/components'
import Styles from './filters-content-styles.scss'

type Props = {
  orderList: Function
  queryList: Function
  favoriteList: Function
  amount: Number
}

const FiltersContent: React.FC<Props> = ({ orderList, queryList, favoriteList, amount }: Props) => {
  const [favorite, setFavorite] = useState(false)

  const changeFavorite = () => {
    favoriteList(!favorite)
    setFavorite(!favorite)
  }

  return (
    <div className={Styles.filtersContent}>
      <InputSearch custom sendQuery={(e: string) => queryList(e)} />
      <div className={Styles.countFiltersContent}>
        <div className={Styles.count}>
          <span>Encontrado {amount} heróis</span>
        </div>
        <div className={Styles.filters}>
          <div className={Styles.orders}>
            <img src={IconHeroi} />
            <span>Ordernar por nome - A/Z</span>
            <Toggle onClick={(e: Boolean) => orderList(e)} />
          </div>
          <a className={Styles.favorites} onClick={() => changeFavorite()}>
            <img src={favorite ? IconFavoriteOn : IconFavoriteOff} />
            <span>Somente favoritos</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FiltersContent