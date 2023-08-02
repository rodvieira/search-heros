import { renderHook } from '@testing-library/react'
import { useFavorite } from './useFavorite'

jest.spyOn(console, 'error').mockImplementation(() => null)

describe('useFavorite', () => {
  test('Should show erro if useFavorite dont have provider', () => {
    expect(() => {
      renderHook(() => useFavorite())
    }).toThrowError()
  })
})
