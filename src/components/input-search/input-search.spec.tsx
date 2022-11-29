import InputSearch from './input-search'
import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const sendQueryMock = jest.fn()

const makeSut = (custom = false) => {
  return render(<InputSearch custom={custom} sendQuery={sendQueryMock} />)
}

describe('InputSearch Component', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Should render InputSearch', () => {
    makeSut()
    const input = screen.getByTestId('input-search') as HTMLInputElement
    expect(input.placeholder).toBe('Procure por heróis')
    expect(input.className).not.toContain('custom')
  })

  test('Should render InputSearch with custom', () => {
    makeSut(true)
    const input = screen.getByTestId('input-search') as HTMLInputElement
    expect(input.className).toContain('custom')
  })

  test('Should call handleKeyDown function when press enter key', () => {
    makeSut()
    const input = screen.getByTestId('input-search') as HTMLInputElement
    fireEvent.focus(input)
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 })
    expect(sendQueryMock).toHaveBeenCalledTimes(1)
  })

  test('Should call handleKeyDown function with correct value', async () => {
    makeSut()
    const inputText = 'some text here'
    const input = screen.getByTestId('input-search') as HTMLInputElement
    await userEvent.type(input, inputText)
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 })
    expect(sendQueryMock).toHaveBeenCalledWith(inputText)
  })
})
