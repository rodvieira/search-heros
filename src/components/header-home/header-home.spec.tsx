import HeaderHome from './header-home'
import React from 'react'
import { render } from '@testing-library/react'

const makeSut = () => {
  return render(<HeaderHome />)
}

describe('HeaderHome Component', () => {
  test('Should render HeaderHome', () => {
    const headerHome = makeSut()
    const title = headerHome.getByTestId('title')
    const description = headerHome.getByTestId('description')
    expect(title.textContent).toBe('EXPLORE O UNIVERSO')
    expect(description.textContent).toBe(
      'Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!'
    )
  })
})
