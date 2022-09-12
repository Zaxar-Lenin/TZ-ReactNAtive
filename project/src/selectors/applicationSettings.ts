import { Slices } from '@/constants'

export const selectHeaderIndex = (state: any) => state[Slices.applicationSettings].headerIndex
export const selectFavorites = (state: any) => state[Slices.applicationSettings].favorites
