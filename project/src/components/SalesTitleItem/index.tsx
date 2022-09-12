import { Colors } from '@/constants'
import { Typography } from '@/ui'
import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'

type Props = {
  saleTitle: string
}

export const SalesTitleItem = ({ saleTitle }: Props) => {
  return (
    <View style={styles.container}>
      <Typography.Subtitle color={Colors.white}>{saleTitle}</Typography.Subtitle>
    </View>
  )
}
