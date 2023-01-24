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

const listComicsMock = [
  { ...comicsMock },
  {
    title: 'Ramdon title 2',
    thumbnail: {
      path: 'path2',
      extension: 'jpg',
    },
  },
]

const makeSut = (comics: Comics[] = [comicsMock]) => {
  return render(<ComicsHero characterComics={comics} />)
}

describe('ComicsHero Component', () => {
  test('Should render ComicsHero', () => {
    makeSut()

    const comicsH2 = screen.getByRole('heading')
    const comicsWrap = screen.getAllByTestId('comics-wrap')

    expect(comicsH2).toHaveTextContent('Últimos lançamentos:')
    expect(comicsWrap).toHaveLength(1)
  })

  test('Should render list ComicsHero', () => {
    makeSut(listComicsMock)

    const comicsWrap = screen.getAllByTestId('comics-wrap')

    expect(comicsWrap).toHaveLength(2)
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
