import React from 'react'

import Styles from './container-styles.scss'

type Props = {
  children: React.ReactNode;
};

const Container: React.FC = ({ children }: Props) => {
  return (
    <div className={Styles.container}>
      {children}
    </div>
  )
}

export default Container