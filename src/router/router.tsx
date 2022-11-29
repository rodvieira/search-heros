import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Hero } from '@/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hero/:id" element={<Hero />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
