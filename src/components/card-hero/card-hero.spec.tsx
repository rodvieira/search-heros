import { CardHero } from '@/components'
import React from 'react'
import { render, screen } from '@testing-library/react'
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

const makeSut = () => {
  return render(
    <CardHero
      character={characterMock}
      onClick={jest.fn()}
      favoriteEvent={jest.fn()}
    />
  )
}

describe('InputSearch Component', () => {
  test('Should render CardHero', () => {
    makeSut()
    const heroName = screen.getByTestId('character-name')
    const heroImage = screen.getByTestId('character-image')
    expect(heroName.textContent).toBe(characterMock.name)
    expect(heroImage).toHaveAttribute('src', `${characterMock.thumbnail.path}.${characterMock.thumbnail.extension}`)
  });
});