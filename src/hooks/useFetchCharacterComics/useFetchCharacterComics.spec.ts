import { renderHook, act } from '@testing-library/react'

import { useFetchCharacterComics } from '@/hooks/useFetchCharacterComics/useFetchCharacterComics'
import { listCharactersMock, mockGetCharacterComics } from '@/test/mock-adapter'

describe('useFetchCharacterComics', () => {
  test('Should call character request when return 200', async () => {
    const mockCharacter = listCharactersMock[0]
    mockGetCharacterComics(mockCharacter.id, 200)

    const { result } = renderHook(() =>
      useFetchCharacterComics(String(mockCharacter.id))
    )

    await act(() => {
      result.current.characterComics
    })

    expect(result.current.characterComics).toHaveLength(2)
    expect(result.current.loading).toBeFalsy()
  })

  test('Should call character request when return 500', async () => {
    const mockCharacter = listCharactersMock[0]
    mockGetCharacterComics(mockCharacter.id, 500)

    const { result } = renderHook(() =>
      useFetchCharacterComics(String(mockCharacter.id))
    )

    await act(() => {
      result.current.characterComics
    })

    expect(result.current.characterComics).toHaveLength(0)
    expect(result.current.loading).toBeFalsy()
  })
})
