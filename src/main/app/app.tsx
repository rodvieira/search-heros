import React from 'react'
import Router from '@/main/router/router'
import { Footer } from '@/components'
import { FavoriteProvider } from '@/contexts/favorite-context'

const App: React.FC = () => {
  return (
    <FavoriteProvider>
      <Router />
      <Footer />
    </FavoriteProvider>
  )
}

export default App
