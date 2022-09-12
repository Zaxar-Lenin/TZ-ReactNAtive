import { Slices } from '@/constants'
import { createSlice } from '@reduxjs/toolkit'

interface IFavorite {
  title: string
  sale_title: string
  image: string
  description: string
  id: string
}

type ApplicationSettingsStateType = {
  headerIndex: number
  favorites: IFavorite[]
}

const initialState: ApplicationSettingsStateType = {
  headerIndex: 0,
  favorites: [],
}

const applicationSettingsSlice = createSlice({
  name: Slices.applicationSettings,
  initialState,
  reducers: {
    setHeaderIndex: (state, action) => {
      return { ...state, headerIndex: action.payload }
    },
    setFavorites: (state, action) => {
      return { ...state, favorites: [...state.favorites, action.payload] }
    },
    removeFavorite: (state, action) => {
      return { ...state, favorites: state.favorites.filter((item) => item.title !== action.payload) }
    },
  },
})

export const {
  actions: { setHeaderIndex, setFavorites, removeFavorite },
  reducer: applicationSettingsReducer,
} = applicationSettingsSlice
