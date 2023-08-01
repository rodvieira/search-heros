import React from 'react'
import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Home } from '@/pages'

import { FavoriteContext } from '@/contexts/favorite-context'
import { listCharactersMock } from '@/test/mock-adapter'
import * as useFetchCharacters from '@/hooks/useFetchCharacters/useFetchCharacters'
import { Character } from '@/types/character'

const fetchCharactersMock = jest.fn()
const handleSetFavoriteCharacterMock = jest.fn()
const handleSetFavoriteMock = jest.fn()
const handleRemoveFavoriteMock = jest.fn()
const useNavigateMock = jest.fn()

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => useNavigateMock,
}))

const useFetchCharactersSpy = jest.spyOn(
  useFetchCharacters,
  'useFetchCharacters'
)

const makeSut = (characters: Character[] = []) => {
  return render(
    <FavoriteContext.Provider
      value={{
        favorites: characters,
        handleSetFavorite: handleSetFavoriteMock,
        handleRemoveFavorite: handleRemoveFavoriteMock,
      }}
    >
      <Home />
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
      handleSetFavoriteCharacter: handleSetFavoriteCharacterMock,
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
      handleSetFavoriteCharacter: handleSetFavoriteCharacterMock,
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
      handleSetFavoriteCharacter: handleSetFavoriteCharacterMock,
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
      handleSetFavoriteCharacter: handleSetFavoriteCharacterMock,
    })
    makeSut()
    const toggle = screen.getByTestId('toggle')
    act(() => {
      fireEvent.click(toggle)
    })
    expect(fetchCharactersMock).toHaveBeenCalled()
    expect(fetchCharactersMock).toHaveBeenCalledWith({ orderBy: 'name' })
  })

  test('Should show just favorites when click in favorites', async () => {
    makeSut([listCharactersMock[0]])
    const justFavorites = screen.getByTestId('just-favorites')
    await act(() => {
      fireEvent.click(justFavorites)
    })
    expect(screen.queryByText('A Bomb')).toBeVisible()
    expect(screen.queryByText('AIM')).toBeNull()
  })

  test('Should add hero in favorites list when click in favorite character', async () => {
    useFetchCharactersSpy.mockReturnValueOnce({
      loading: false,
      characters: listCharactersMock,
      fetchCharacters: fetchCharactersMock,
      handleSetFavoriteCharacter: handleSetFavoriteCharacterMock,
    })
    makeSut()
    const toggleFavorite = screen.getAllByTestId('toggle-favorite')[1]
    await act(() => {
      fireEvent.click(toggleFavorite)
    })
    expect(handleRemoveFavoriteMock).not.toHaveBeenCalled()
    expect(handleSetFavoriteMock).toHaveBeenCalled()
    expect(handleSetFavoriteMock).toHaveBeenCalledWith(listCharactersMock[1])
    expect(handleSetFavoriteCharacterMock).toHaveBeenCalledWith(
      listCharactersMock[1].id
    )
  })

  test('Should remove hero in favorites list when click in favorite character', async () => {
    useFetchCharactersSpy.mockReturnValueOnce({
      loading: false,
      characters: listCharactersMock,
      fetchCharacters: fetchCharactersMock,
      handleSetFavoriteCharacter: handleSetFavoriteCharacterMock,
    })
    makeSut()
    const toggleFavorite = screen.getAllByTestId('toggle-favorite')[0]
    await act(() => {
      fireEvent.click(toggleFavorite)
    })
    expect(handleSetFavoriteMock).not.toHaveBeenCalled()
    expect(handleRemoveFavoriteMock).toHaveBeenCalled()
    expect(handleRemoveFavoriteMock).toHaveBeenCalledWith(listCharactersMock[0])
    expect(handleSetFavoriteCharacterMock).toHaveBeenCalledWith(
      listCharactersMock[0].id
    )
  })

  test('Should navigate to a hero details page', async () => {
    useFetchCharactersSpy.mockReturnValueOnce({
      loading: false,
      characters: listCharactersMock,
      fetchCharacters: fetchCharactersMock,
      handleSetFavoriteCharacter: handleSetFavoriteCharacterMock,
    })
    makeSut()
    const characterDetails = screen.getAllByTestId('character-link')[0]
    await act(() => {
      fireEvent.click(characterDetails)
    })
    expect(useNavigateMock).toHaveBeenCalled()
    expect(useNavigateMock).toHaveBeenCalledWith(
      `/hero/${listCharactersMock[0].id}`
    )
  })
})
