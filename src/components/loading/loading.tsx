import React from 'react'
import { Spinner } from '@/components'

const Loading: React.FC = () => {
  return (
    <div
      data-testid="loading"
      style={{ display: 'flex', justifyContent: 'center', margin: '40px' }}
    >
      <Spinner isNegative />
    </div>
  )
}

export default Loading
