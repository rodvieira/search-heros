import Styles from './loading-styles.scss'
import { Spinner } from '@/components'
import React from 'react'

const Loading: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', margin: '40px' }}>
      <Spinner isNegative />
    </div>
  )
}

export default Loading
