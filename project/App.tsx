import { RootNavigator } from '@/navigation'
import { persistor, store } from '@/store'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export default function App() {
  return (
    <PersistGate persistor={persistor} loading={null}>
      <Provider store={store}>
        <SafeAreaProvider>
          <NavigationContainer>
            <RootNavigator />
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </PersistGate>
  )
}
