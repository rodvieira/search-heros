import React, { memo } from 'react'

import IconLogo from '@/assets/logo.svg'
import Styles from './logo-styles.scss'

const Logo: React.FC = () => <img src={IconLogo} className={Styles.logo} />

export default memo(Logo)