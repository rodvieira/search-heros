import { Thumbnail } from './thumbnail'

export interface Character {
  id: number
  name: string
  description?: string
  comicsCount?: number
  seriesCount?: number
  thumbnail: Thumbnail
  favorite?: boolean
}