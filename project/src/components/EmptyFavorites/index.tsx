import { Typography } from '@/ui'
import React from 'react'
import { Image, View } from 'react-native'
import { styles } from './styles'

export const EmptyFavorites = () => {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/images/png/FavoriteEmpty.png')} />
      <Typography.Title mt={36}>Нет избранного</Typography.Title>
      <Typography.Label mt={12} textAlign={'center'}>
        Чтобы добавить любимые скидки, просто нажими на иконку 💙️ в карточке
      </Typography.Label>
    </View>
  )
}
