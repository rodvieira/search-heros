import React, { useState } from 'react'

import IconFavoriteOn from '@/assets/favorito_01.svg'
import IconFavoriteOff from '@/assets/favorito_02.svg'

type Props = {
  onClick: Function
}

const Favorite: React.FC<Props> = ({ onClick }: Props) => {
  const [status, setStatus] = useState<Boolean>(false)

  const handleClick = (e: Boolean) => {
    onClick(e)
    setStatus(e)
  }

  return (
    <a onClick={() => handleClick(!status)}>
      <img src={status ? IconFavoriteOn : IconFavoriteOff} />
    </a>
  )
}

export default Favorite