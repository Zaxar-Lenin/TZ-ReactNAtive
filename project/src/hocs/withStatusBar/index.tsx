import { Colors } from '@/constants'
import { useFocusEffect, useRoute } from '@react-navigation/native'
import React from 'react'
import { Platform, StatusBar, View } from 'react-native'

export const withStatusBar = (Screen: any) => {
  return (props: any) => {
    const route = useRoute()

    useFocusEffect(() => {
      switch (route.name) {
        default:
          if (Platform.OS === 'android') {
            StatusBar.setBackgroundColor(Colors.white)
          }
          StatusBar.setBarStyle('dark-content')
          break
      }
    })

    return (
      <View style={{ flex: 1 }}>
        <Screen {...props} />
      </View>
    )
  }
}
