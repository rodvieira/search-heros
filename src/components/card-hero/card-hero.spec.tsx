import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'

import { CardHero } from '@/components'
import { Character } from '@/protocols/character'

const characterMock: Character = {
  id: 555,
  name: 'Mock Name',
  description: 'Mock Description',
  comicsCount: 5,
  seriesCount: 3,
  thumbnail: {
    path: 'path',
    extension: 'png'
  },
  favorite: false
}

const onClickMock = jest.fn()
const favoriteEventMock = jest.fn()

const makeSut = () => {
  return render(
    <CardHero
      character={characterMock}
      onClick={onClickMock}
      favoriteEvent={favoriteEventMock}
    />
  )
}

describe('CardHero Component', () => {
  test('Should render CardHero with correct values', () => {
    makeSut()
    const heroName = screen.getByTestId('character-name')
    const heroImage = screen.getByTestId('character-image')
    expect(heroName.textContent).toBe(characterMock.name)
    expect(heroImage).toHaveAttribute('src', `${characterMock.thumbnail.path}.${characterMock.thumbnail.extension}`)
  });

  test('Should call onClick function when click in link', () => {
    makeSut()
    const characterLink = screen.getByTestId('character-link')
    fireEvent.click(characterLink)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test('Should call favoriteEvent function when click in favorite', () => {
    makeSut()
    const favoriteWrap = screen.getByTestId('favorite-wrap')
    fireEvent.click(favoriteWrap)
    expect(favoriteEventMock).toHaveBeenCalledTimes(1)
  })

  test('Should call favoriteEvent function with correct value', () => {
    makeSut()
    const favoriteWrap = screen.getByTestId('favorite-wrap')
    fireEvent.click(favoriteWrap)
    expect(favoriteEventMock).toHaveBeenCalledWith(!characterMock.favorite)
  })
});