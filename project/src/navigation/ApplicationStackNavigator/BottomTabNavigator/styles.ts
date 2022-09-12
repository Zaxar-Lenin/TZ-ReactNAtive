import { TabBar } from '@/constants/tabBar'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  navigator: {
    height: TabBar.tabBarHeight,
    elevation: 0,
  },
  tabBarLabelStyle: {
    marginBottom: 8,
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 16,
  },
})
