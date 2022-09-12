import { Slices } from '@/constants'
import { applicationSettingsReducer } from '@/slices/applicationSettings'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'

const applicationSettingsPersistConfig = {
  key: Slices.applicationSettings,
  storage: AsyncStorage,
  whitelist: ['favorites'],
}

const reducers = combineReducers({
  [Slices.applicationSettings]: persistReducer(applicationSettingsPersistConfig, applicationSettingsReducer),
})

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
