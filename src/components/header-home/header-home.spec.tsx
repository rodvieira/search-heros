import HeaderHome from './header-home'
import React from 'react'
import { render } from '@testing-library/react'

const makeSut = () => {
  return render(<HeaderHome />)
}

describe('HeaderHome Component', () => {
  test('Should render thats', () => {
    const headerHome = makeSut()
    const title = headerHome.getByTestId('title')
    const description = headerHome.getByTestId('description')
    expect(title).toBe('EXPLORE O UNIVERSO')
    expect(description).toBe('Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - e aqueles que você descobrirá em breve!')
  });
});