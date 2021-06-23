import { Thumbnail } from './thumbnail'

export interface Character {
  name: string
  description: string
  comicsCount: number
  seriesCount: number
  thumbnail: Thumbnail
}