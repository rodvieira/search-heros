import React from 'react'

import IconFavoriteOn from '@/assets/favorito_01.svg'
import IconFavoriteOff from '@/assets/favorito_02.svg'

type Props = {
  onClick: Function
  favorite: boolean
}

const Favorite: React.FC<Props> = ({ onClick, favorite }: Props) => {

  return (
    <a onClick={() => onClick(!favorite)}>
      <img src={favorite ? IconFavoriteOn : IconFavoriteOff} />
    </a>
  )
}

export default Favorite