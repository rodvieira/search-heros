import React from 'react'

import Styles from './container-styles.scss'

type Props = {
  children: React.ReactNode
  size: string
}

const Container: React.FC<Props> = ({ children, size }: Props) => {
  return (
    <div
      data-testid="container"
      className={Styles.container}
      style={{ maxWidth: `${size}px` }}
    >
      {children}
    </div>
  )
}

export default Container
