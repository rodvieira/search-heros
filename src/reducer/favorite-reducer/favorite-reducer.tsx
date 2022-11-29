import { Character } from '@/protocols/character'

type FavoriteState = {
  favorites: Character[]
}

type FavoriteAction = {
  type: 'ADD_FAVORITE' | 'REMOVE_FAVORITE'
  data: Character
}

export const initialState = {
  favorites: [],
}

export const FavoriteReducer = (
  state: FavoriteState,
  action: FavoriteAction
) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.data],
      }
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter((item) => item.id !== action.data.id),
      }
    default:
      throw state
  }
}
