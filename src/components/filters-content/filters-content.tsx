import React from 'react'
import IconHeroi from '@/assets/ic_heroi.svg'
import IconToggleOn from '@/assets/toggle_on.svg'
import IconFavorite from '@/assets/favorito_01.svg'
import { InputSearch } from '@/components'
import Styles from './filters-content-styles.scss'

const FiltersContent: React.FC = () => {
  return (
    <div className={Styles.filtersContent}>
      <InputSearch />
      <div className={Styles.countFiltersContent}>
        <div className={Styles.count}>
          <span>Encontrado 20 heróis</span>
        </div>
        <div className={Styles.filters}>
          <div className={Styles.orders}>
            <img src={IconHeroi} />
            <span>Ordernar por nome - A/Z</span>
            <img src={IconToggleOn} className={Styles.toggle} />
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