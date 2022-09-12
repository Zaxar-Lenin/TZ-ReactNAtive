import { AccountIcon, FavoriteIcon, HomeIcon } from '@/assets'
import { Colors, Navigators, Screens } from '@/constants'
import { getTabBarIconColor } from '@/helpers'
import { AccountScreen } from '@/screens'
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { TouchableRipple } from 'react-native-paper'
import { FavoriteStackNavigator } from '../FavoriteStackNavigator'
import { HomeStackNavigator } from '../HomeStackNavigator'
import { styles } from './styles'

const Tab = createBottomTabNavigator()

const CustomTabBarButton = ({ customStyle, ...props }: any) => {
  const newProps = {
    ...props,
    style: [...props.style, customStyle],
  }
  return <TouchableRipple {...newProps} />
}

export const BottomTabNavigator = () => {
  const bottomTabNavigatorOptions: BottomTabNavigationOptions = {
    headerShown: false,
    tabBarLabelStyle: styles.tabBarLabelStyle,
    tabBarStyle: styles.navigator,
    tabBarActiveTintColor: getTabBarIconColor(true, Colors.primary, Colors.grey),
    tabBarInactiveTintColor: getTabBarIconColor(false, Colors.primary, Colors.grey),
  }

  return (
    <Tab.Navigator screenOptions={bottomTabNavigatorOptions}>
      <Tab.Screen
        name={Navigators.homeStack}
        component={HomeStackNavigator}
        options={{
          tabBarLabel: 'Скидки',
          tabBarIcon: ({ focused }) => <HomeIcon fill={getTabBarIconColor(focused, Colors.primary, Colors.grey)} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={Navigators.favoriteStack}
        component={FavoriteStackNavigator}
        options={{
          tabBarLabel: 'Избранное',
          tabBarIcon: ({ focused }) => <FavoriteIcon fill={getTabBarIconColor(focused, Colors.primary, Colors.grey)} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name={Screens.account}
        component={AccountScreen}
        options={{
          tabBarLabel: 'Аккаунт',
          tabBarIcon: ({ focused }) => <AccountIcon fill={getTabBarIconColor(focused, Colors.primary, Colors.grey)} />,
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      />
    </Tab.Navigator>
  )
}
