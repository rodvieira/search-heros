import React from 'react'
import Styles from './input-search-styles.scss'

type Props = {
  custom?: Boolean
}

const InputSearch: React.FC<Props> = ({ custom }: Props) => {
  return (
    <input
      type="text"
      placeholder="Procure por heróis"
      className={`${Styles.inputSearch} ${custom && Styles.custom}`}
    />
  )
}

export default InputSearch