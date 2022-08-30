import React from 'react'

import Styles from './flex-content-styles.scss'

type Props = {
  children: React.ReactNode;
};

const FlexContent: React.FC<Props> = ({ children }: Props) => {
  return (
    <div className={Styles.flexContent}>
      {children}
    </div>
  )
}

export default FlexContent