import { LocationIcon } from '@/assets'
import { Colors } from '@/constants'
import { Typography } from '@/ui'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { NewBenegefitsItem } from '../NewBenegefitsItem'
import { styles } from './styles'

type Props = {
  data: {
    title: string
    sale_title: string
    image: string
    id: string
  }[]
}

export const NewBenefits = ({ data }: Props) => {
  return (
    <View style={{ marginBottom: 32 }}>
      <View style={styles.header}>
        <Typography.Title mb={16} ml={16}>
          Новинки
        </Typography.Title>
        <View style={styles.headerInner}>
          <LocationIcon />
          <Typography.Subtitle color={Colors.grey} ml={8} mr={16}>
            Минск
          </Typography.Subtitle>
        </View>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12 }}>
        {data.map((item) => (
          <NewBenegefitsItem key={item.id} data={item} />
        ))}
      </ScrollView>
    </View>
  )
}
