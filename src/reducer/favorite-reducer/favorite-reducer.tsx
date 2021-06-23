import { Character } from '@/protocols/character'
import { database } from 'faker'

type FavoriteState = {
  favorites: Character[]
}

type FavoriteAction = {
  type: 'ADD_FAVORITE' | 'REMOVE_FAVORITE'
  data: Character
}

export const initialState = {
  favorites: []
}

export const FavoriteReducer = (state: FavoriteState, action: FavoriteAction) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.data]
      }
    case 'REMOVE_FAVORITE':
      const index = state.favorites.findIndex(item => item.id === action.data.id)
      const newState = [...state.favorites]
      return {
        ...state,
        favorites: newState.splice(index, 1)
      }
    default:
      throw state
  }
}
