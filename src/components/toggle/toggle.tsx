import React, { useState } from 'react'

import IconToggleOn from '@/assets/toggle_on.svg'
import IconToggleOff from '@/assets/toggle_off.svg'
import Styles from './toggle-styles.scss'

type Props = {
  onClick: (status: boolean) => void
}

const Toggle: React.FC<Props> = ({ onClick }: Props) => {
  const [status, setStatus] = useState<boolean>(false)

  const handleClick = (e: boolean) => {
    onClick(e)
    setStatus(e)
  }

  return (
    <a onClick={() => handleClick(!status)}>
      <img
        src={status ? IconToggleOn : IconToggleOff}
        className={Styles.toggle}
      />
    </a>
  )
}

export default Toggle
