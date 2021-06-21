import React from 'react'
import Styles from './input-search-styles.scss'

const InputSearch: React.FC = () => {
  return (
    <div className={Styles.inputSearch}>
      <input type="text" placeholder="Procure por heróis" />
    </div>
  )
}

export default InputSearch