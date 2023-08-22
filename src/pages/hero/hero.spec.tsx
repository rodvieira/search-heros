import React from 'react'
import Hero from './hero'
import { act, render, screen } from '@testing-library/react'

import * as useFetchCharacter from '@/hooks/useFetchCharacter/useFetchCharacter'
import * as useFetchCharacterComics from '@/hooks/useFetchCharacterComics/useFetchCharacterComics'
import { listCharactersMock, listComicsMock } from '@/test/mock-adapter'

const useFetchCharacterSpy = jest.spyOn(useFetchCharacter, 'useFetchCharacter')
const useFetchCharacterComicsSpy = jest.spyOn(
  useFetchCharacterComics,
  'useFetchCharacterComics'
)

const makeSut = () => {
  return render(<Hero />)
}

describe('Hero Page', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  test('should show loading in details hero page', async () => {
    const characterMock = listCharactersMock[0]

    useFetchCharacterSpy.mockReturnValueOnce({
      loading: true,
      character: characterMock,
    })
    useFetchCharacterComicsSpy.mockReturnValueOnce({
      loading: false,
      characterComics: listComicsMock,
    })

    makeSut()
    expect(screen.getByTestId('loading')).toBeInTheDocument()
    expect(screen.queryByText(characterMock.name)).not.toBeInTheDocument()
  })
  test('should show details of hero', () => {
    const characterMock = listCharactersMock[0]

    useFetchCharacterSpy.mockReturnValueOnce({
      loading: false,
      character: characterMock,
    })
    useFetchCharacterComicsSpy.mockReturnValueOnce({
      loading: false,
      characterComics: listComicsMock,
    })

    makeSut()
    const characterName = screen.getAllByRole('heading')[0]
    expect(characterName).toHaveTextContent(characterMock.name)
    expect(screen.getByTestId('character-description')).toHaveTextContent(
      characterMock.description
    )
    expect(screen.getByTestId('character-comics-count')).toHaveTextContent(
      String(characterMock.comicsCount)
    )
    expect(screen.getByTestId('character-series-count')).toHaveTextContent(
      String(characterMock.seriesCount)
    )
  })
})
