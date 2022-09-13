import InputSearch from './input-search'
import React from 'react'
import { render } from '@testing-library/react'

const makeSut = (custom: boolean = false) => {
  return render(<InputSearch custom={custom} />)
}

describe('InputSearch Component', () => {
  test('Should render InputSearch', () => {
    const inputSearch = makeSut()
    const input = inputSearch.getByTestId('input-search') as HTMLInputElement
    expect(input.placeholder).toBe('Procure por heróis')
    expect(input.className).not.toContain('custom')
  });

  test('Should render InputSearch with custom', () => {
    const inputSearch = makeSut(true)
    const input = inputSearch.getByTestId('input-search') as HTMLInputElement
    expect(input.className).toContain('custom')
  });
});