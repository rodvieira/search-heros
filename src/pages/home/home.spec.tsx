import React from 'react'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { Home } from '@/pages'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { listCharactersMock } from '@/test/mock-adapter'
import { FavoriteContext } from '@/contexts/favorite-context'
import * as useFetchCharacters from '@/hooks/useFetchCharacters'
import userEvent from '@testing-library/user-event'

const fetchCharactersMock = jest.fn()
const handleOnlyFavoritesMock = jest.fn()

const useFetchCharactersSpy = jest.spyOn(
  useFetchCharacters,
  'useFetchCharacters'
)
const makeSut = () => {
  return render(
    <FavoriteContext.Provider
      value={{
        favorite: ['10'],
        handleSetFavorite: jest.fn(),
        handleRemoveFavorite: jest.fn(),
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </FavoriteContext.Provider>
  )
}

describe('Home Page', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  test('Should render Home with initial state', () => {
    useFetchCharactersSpy.mockReturnValueOnce({
      loading: true,
      characters: [],
      fetchCharacters: fetchCharactersMock,
      handleOnlyFavorites: handleOnlyFavoritesMock,
    })
    makeSut()
    const loading = screen.getByTestId('loading')
    expect(loading).toBeInTheDocument()
  })

  test('Should show heros list', () => {
    useFetchCharactersSpy.mockReturnValueOnce({
      loading: false,
      characters: listCharactersMock,
      fetchCharacters: fetchCharactersMock,
      handleOnlyFavorites: handleOnlyFavoritesMock,
    })
    makeSut()
    const amountCharactersListed = screen.getByText('Encontrado 2 heróis')
    const character = screen.getAllByTestId('character-link')

    expect(amountCharactersListed).toBeInTheDocument()
    expect(character).toHaveLength(2)
  })

  test('Should filter characters when enter a input with value', async () => {
    useFetchCharactersSpy.mockReturnValueOnce({
      loading: false,
      characters: [],
      fetchCharacters: fetchCharactersMock,
      handleOnlyFavorites: handleOnlyFavoritesMock,
    })
    makeSut()
    const input = screen.getByTestId('input-search')
    await act(async () => {
      fireEvent.focus(input)
      await userEvent.type(input, 'Hulk')
      fireEvent.keyDown(input, { key: 'Enter', code: 'Enter', charCode: 13 })
    })
    expect(fetchCharactersMock).toHaveBeenCalled()
    expect(fetchCharactersMock).toHaveBeenCalledWith({ nameStartsWith: 'Hulk' })
  })

  test('Should order list by name when click in toggle', () => {
    useFetchCharactersSpy.mockReturnValueOnce({
      loading: false,
      characters: [],
      fetchCharacters: fetchCharactersMock,
      handleOnlyFavorites: handleOnlyFavoritesMock,
    })
    makeSut()
    const toggle = screen.getByTestId('toggle')
    act(() => {
      fireEvent.click(toggle)
    })
    expect(fetchCharactersMock).toHaveBeenCalled()
    expect(fetchCharactersMock).toHaveBeenCalledWith({ orderBy: 'name' })
  })
})
