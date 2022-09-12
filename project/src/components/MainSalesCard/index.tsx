import { Colors } from '@/constants'
import { setHeaderIndex } from '@/slices'
import { Typography } from '@/ui'
import React from 'react'
import { ScrollView, View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { useDispatch } from 'react-redux'
import { SalesItemContent } from '../SalesItemContent'
import { styles } from './styles'

type Props = {
  arr: {
    title: string
    id: string
    data: {
      title: string
      sale_title: string
      image: string
      id: string
    }[]
  }
}

export const MainSalesCard = ({ arr }: Props) => {
  const { data, title, id } = arr
  const dispatch = useDispatch()

  const handleGoToBenefits = () => {
    dispatch(setHeaderIndex(+id + 1))
  }

  return (
    <View style={{ marginBottom: 32 }}>
      <View style={styles.header}>
        <Typography.Title mb={16} ml={16}>
          {title}
        </Typography.Title>
        <Typography.Subtitle onPress={handleGoToBenefits} color={Colors.primary} mr={16}>
          Все
        </Typography.Subtitle>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 12 }}>
        {data.slice(0, 4).map((item) => (
          <SalesItemContent key={item.id} data={item} />
        ))}
        {data.length > 4 && (
          <TouchableRipple borderless onPress={handleGoToBenefits} style={styles.showMoreContainer}>
            <Typography.Subtitle size={14} color={Colors.grey}>
              Смотреть еще {data.length - 4}
            </Typography.Subtitle>
          </TouchableRipple>
        )}
      </ScrollView>
    </View>
  )
}
