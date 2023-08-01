import { renderHook, act } from '@testing-library/react'

import { useFetchCharacter } from '@/hooks/useFetchCharacter/useFetchCharacter'
import { listCharactersMock, mockGetCharacter } from '@/test/mock-adapter'

describe('useFetchCharacter', () => {
  test('Should call character request when return 200', async () => {
    const mockCharacter = listCharactersMock[0]
    mockGetCharacter(mockCharacter.id)

    const { result } = renderHook(() =>
      useFetchCharacter(String(mockCharacter.id))
    )

    await act(() => {
      result.current.character
    })

    expect(result.current?.character?.name).toBe(mockCharacter.name)
    expect(result.current.loading).toBeFalsy()
  })
})
