import React, { memo } from 'react'

import IconLogo from '@/assets/logo.svg'

const Logo: React.FC = () => <img src={IconLogo} />

export default memo(Logo)