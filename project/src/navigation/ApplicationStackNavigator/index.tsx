import { Navigators } from '@/constants'
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'
import { BottomTabNavigator } from './BottomTabNavigator'

const Stack = createStackNavigator()

const stackNavigatorOptions: StackNavigationOptions = {
  headerShown: false,
}

export const ApplicationStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorOptions}>
      <Stack.Screen name={Navigators.bottomTabs} component={BottomTabNavigator} />
    </Stack.Navigator>
  )
}
