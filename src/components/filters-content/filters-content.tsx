import React from 'react'
import IconHeroi from '@/assets/ic_heroi.svg'
import IconFavorite from '@/assets/favorito_01.svg'
import { InputSearch, Toggle } from '@/components'
import Styles from './filters-content-styles.scss'

type Props = {
  orderList: Function
  queryList: Function
  amount: Number
}

const FiltersContent: React.FC<Props> = ({ orderList, queryList, amount }: Props) => {
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
          <div className={Styles.favorites}>
            <img src={IconFavorite} />
            <span>Somente favoritos</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FiltersContent