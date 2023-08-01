import { renderHook, act } from '@testing-library/react'

import { useFetchCharacters } from '@/hooks/useFetchCharacters'
import { mockGetCharacters } from '@/test/mock-adapter'

describe('useFetchCharacters', () => {
  test('Should call characters request when return 200', async () => {
    mockGetCharacters(200)

    const { result } = renderHook(() => useFetchCharacters())

    expect(result.current.characters).toHaveLength(0)
    expect(result.current.loading).toBeTruthy()

    await act(() => {
      result.current.characters
    })

    expect(result.current.characters).toHaveLength(2)
    expect(result.current.loading).toBeFalsy()
  })

  test('Should call characters request when return 500', async () => {
    mockGetCharacters(500)

    const { result } = renderHook(() => useFetchCharacters())

    expect(result.current.characters).toHaveLength(0)
    expect(result.current.loading).toBeTruthy()

    await act(() => {
      result.current.characters
    })

    expect(result.current.characters).toHaveLength(0)
    expect(result.current.loading).toBeFalsy()
  })

  test('Should add favorite user in a list', async () => {
    mockGetCharacters(200)

    const { result } = renderHook(() => useFetchCharacters())

    await act(() => {
      result.current.characters
    })

    await act(() => {
      result.current.handleSetFavoriteCharacter(result.current.characters[1].id)
    })

    const favoritesCharacter = result.current.characters.filter(
      (character) => character.favorite
    )

    expect(favoritesCharacter.length).toBe(2)
  })

  test('Should remove favorite user in a list', async () => {
    mockGetCharacters(200)

    const { result } = renderHook(() => useFetchCharacters())

    await act(() => {
      result.current.characters
    })

    await act(() => {
      result.current.handleSetFavoriteCharacter(result.current.characters[0].id)
    })

    const favoritesCharacter = result.current.characters.filter(
      (character) => character.favorite
    )

    expect(favoritesCharacter.length).toBe(0)
  })
})
