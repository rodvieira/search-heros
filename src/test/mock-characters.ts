import { Character } from '@/types/character'

export const listCharactersMock: Character[] = [
  {
    id: 10,
    name: 'A Bomb',
    description: 'This is a hero A Bomb',
    comicsCount: 100,
    seriesCount: 50,
    thumbnail: {
      path: '',
      extension: '',
    },
    favorite: true,
  },
  {
    id: 20,
    name: 'AIM',
    description: 'This is a hero AIM',
    comicsCount: 50,
    seriesCount: 25,
    thumbnail: {
      path: '',
      extension: '',
    },
    favorite: false,
  },
]
