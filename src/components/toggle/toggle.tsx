import React, { useState } from 'react'

import IconToggleOn from '@/assets/toggle_on.svg'
import IconToggleOff from '@/assets/toggle_off.svg'
import Styles from './toggle-styles.scss'

type Props = {
  onClick: Function
}

const Toggle: React.FC<Props> = ({ onClick }: Props) => {
  const [status, setStatus] = useState<Boolean>(false);

  const handleClick = (e: Boolean) => {
    onClick(e)
    setStatus(e)
  }

  return (
    <a onClick={() => handleClick(!status)}>
      <img src={status ? IconToggleOn : IconToggleOff} className={Styles.toggle} />
    </a>
  )
}

export default Toggle