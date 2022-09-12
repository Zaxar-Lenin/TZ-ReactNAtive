import { Colors } from '@/constants'
import React from 'react'
import { ActivityIndicator } from 'react-native'
import { styles } from './styles'

export const Spinner = () => {
  return <ActivityIndicator style={styles.container} size={'large'} color={Colors.primary} />
}
