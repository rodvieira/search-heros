import React from 'react'
import Styles from './input-search-styles.scss'

type Props = {
  custom?: Boolean
  sendQuery?: Function
}

const InputSearch: React.FC<Props> = ({ custom, sendQuery }: Props) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendQuery(e.target.value)
  }

  return (
    <input
      type="text"
      placeholder="Procure por heróis"
      className={`${Styles.inputSearch} ${custom && Styles.custom}`}
      onKeyDown={(e) => handleKeyDown(e)}
    />
  )
}

export default InputSearch