import React from 'react'
import { render, screen } from '@testing-library/react'

import { ComicsHero } from '@/components'
import { Comics } from '@/types/comics'

const comicsMock: Comics = {
  title: 'Ramdon title',
  thumbnail: {
    path: 'path',
    extension: 'png',
  },
}

const makeSut = () => {
  return render(<ComicsHero characterComics={[comicsMock]} />)
}

describe('ComicsHero Component', () => {
  test('Should render ComicsHero', () => {
    makeSut()

    const comicsH2 = screen.getByRole('heading')
    const comicsWrap = screen.getAllByTestId('comics-wrap')

    expect(comicsH2).toHaveTextContent('Últimos lançamentos:')
    expect(comicsWrap).toHaveLength(1)
  })

  test('Should render ComicsHero with attributes characterComics', () => {
    makeSut()

    const imageMock = `${comicsMock.thumbnail.path}.${comicsMock.thumbnail.extension}`

    const comicsImage = screen.getByRole('img')
    const comicsTitle = screen.getByTestId('comics-title')

    expect(comicsImage).toHaveAttribute('src', imageMock)
    expect(comicsImage).toHaveAttribute('alt', comicsMock.title)
    expect(comicsTitle).toHaveTextContent(comicsMock.title)
  })
})
