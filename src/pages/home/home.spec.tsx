import React from 'react'
import { render, screen } from '@testing-library/react'

import { Home } from '@/pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const makeSut = () => {
  return render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

describe('Home Page', () => {
  test('Should render Home with initial state', () => {
    makeSut()

    const loading = screen.getByTestId('loading')

    expect(loading).toBeInTheDocument()
  })

  test('Should ordered list with toggle click', () => {
    makeSut()

    const toggle = screen.getByTestId('toggle')

    toggle.click()
  })
})
