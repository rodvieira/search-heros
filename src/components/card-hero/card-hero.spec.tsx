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

const makeSut = (onClickFn = jest.fn(), favoriteEventFn = jest.fn()) => {
  return render(
    <CardHero
      character={characterMock}
      onClick={onClickFn}
      favoriteEvent={favoriteEventFn}
    />
  )
}

describe('CardHero Component', () => {
  test('Should render CardHero', () => {
    makeSut()
    const heroName = screen.getByTestId('character-name')
    const heroImage = screen.getByTestId('character-image')
    expect(heroName.textContent).toBe(characterMock.name)
    expect(heroImage).toHaveAttribute('src', `${characterMock.thumbnail.path}.${characterMock.thumbnail.extension}`)
  });

  test('Should call onClick function when click in link', () => {
    const onClickFn = jest.fn()
    makeSut(onClickFn)
    const characterLink = screen.getByTestId('character-link')
    fireEvent.click(characterLink)
    expect(onClickFn).toHaveBeenCalledTimes(1)
  })
});