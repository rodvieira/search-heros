import React from 'react'
import ReactDOM from 'react-dom'

import { Home } from '@/pages'
import { Footer } from '@/components'
import '@/assets/style/global.scss'

const App: React.FC = () => {
  return (
    <>
      <Home />
      <Footer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('main'))