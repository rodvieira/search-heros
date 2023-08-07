import React from 'react'
import Styles from './input-search-styles.scss'

type Props = {
  sendQuery?: (query: string) => void
}

const InputSearch: React.FC<Props> = ({ sendQuery }: Props) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') sendQuery(e.currentTarget.value)
  }

  return (
    <input
      data-testid="input-search"
      type="text"
      placeholder="Procure por heróis"
      className={`${Styles.inputSearch}`}
      onKeyDown={handleKeyDown}
    />
  )
}

export default InputSearch
