import { HomeHeader } from '@/components'
import { Screens } from '@/constants'
import { BenefitScreen, HomeScreen } from '@/screens'
import { CardStyleInterpolators, createStackNavigator, StackNavigationOptions } from '@react-navigation/stack'
import React from 'react'

const Stack = createStackNavigator()

const stackNavigatorOptions: StackNavigationOptions = {
  header: (props) => <HomeHeader {...props} />,
}

const benefitOptions: StackNavigationOptions = {
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
  headerShown: false,
}

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={stackNavigatorOptions}>
      <Stack.Screen name={Screens.home} component={HomeScreen} />
      <Stack.Screen options={benefitOptions} name={Screens.benefit} component={BenefitScreen} />
    </Stack.Navigator>
  )
}
