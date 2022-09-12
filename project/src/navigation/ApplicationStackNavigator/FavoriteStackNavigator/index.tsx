import { Screens } from '@/constants'
import { BenefitScreen, FavoriteScreen } from '@/screens'
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'

const Stack = createStackNavigator()

const stackNavigatorOptions: StackNavigationOptions = {
  headerShown: false,
}

const benefitOptions: StackNavigationOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
}

export const FavoriteStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorOptions}>
      <Stack.Screen name={Screens.favorite} component={FavoriteScreen} />
      <Stack.Screen options={benefitOptions} name={Screens.benefitFavorite} component={BenefitScreen} />
    </Stack.Navigator>
  )
}
