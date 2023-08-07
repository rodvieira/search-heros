import React, { useState } from 'react'
import IconHeroi from '@/assets/ic_heroi.svg'
import IconFavoriteOn from '@/assets/favorito_01.svg'
import IconFavoriteOff from '@/assets/favorito_02.svg'
import { InputSearch, Toggle } from '@/components'
import Styles from './filters-content-styles.scss'

type Props = {
  orderList: (order: boolean) => void
  queryList: (query: string) => void
  favoriteList: () => void
  amount: number
}

const FiltersContent: React.FC<Props> = ({
  orderList,
  queryList,
  favoriteList,
  amount,
}: Props) => {
  const [favorite, setFavorite] = useState(false)

  const changeFavorite = () => {
    favoriteList()
    setFavorite(!favorite)
  }

  return (
    <div className={Styles.filtersContent}>
      <InputSearch sendQuery={(e: string) => queryList(e)} />
      <div className={Styles.countFiltersContent}>
        <div className={Styles.count}>
          <span>{`Encontrado ${amount || 0} heróis`}</span>
        </div>
        <div className={Styles.filters}>
          <div className={Styles.orders}>
            <img src={IconHeroi} />
            <span>Ordernar por nome - A/Z</span>
            <Toggle onClick={(e: boolean) => orderList(e)} />
          </div>
          <a
            data-testid="just-favorites"
            className={Styles.favorites}
            onClick={() => changeFavorite()}
          >
            <img src={favorite ? IconFavoriteOn : IconFavoriteOff} />
            <span>Somente favoritos</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default FiltersContent
