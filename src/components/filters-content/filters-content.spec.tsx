import React from 'react'
import { fireEvent, render, screen } from '@testing-library/react'
import FiltersContent from './filters-content'

const orderListMock = jest.fn()
const queryListMock = jest.fn()
const favoriteListMock = jest.fn()

const makeSut = () => {
  return render(
    <FiltersContent
      orderList={orderListMock}
      queryList={queryListMock}
      favoriteList={favoriteListMock}
      amount={0}
    />
  )
}

describe('FiltersContent Component', () => {
  test('Should calls orderList when click in toggle', () => {
    makeSut()
    const toggle = screen.getByTestId('toggle')
    fireEvent.click(toggle)

    expect(orderListMock).toHaveBeenCalledTimes(1)
  })

  test('Should calls queryList when press enter key', () => {
    makeSut()
    const textbox = screen.getByRole('textbox')
    fireEvent.focus(textbox)
    fireEvent.keyDown(textbox, { key: 'Enter', code: 'Enter', charCode: 13 })

    expect(queryListMock).toBeCalledTimes(1)
  })
})
