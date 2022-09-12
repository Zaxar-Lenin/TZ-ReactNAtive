import { Colors, Screens } from '@/constants'
import { getImage } from '@/helpers'
import { selectFavorites } from '@/selectors'
import { Typography } from '@/ui'
import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ImageBackground, View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { useSelector } from 'react-redux'
import { SalesTitleItem } from '../SalesTitleItem'
import { styles } from './styles'

type Props = {
  data: {
    title: string
    sale_title: string
    image: string
    id: string
  }
}

export const SalesItemContent = ({ data }: Props) => {
  const navigation = useNavigation<any>()
  const handleGoToBenefit = () => navigation.navigate(Screens.benefit)

  const { title, sale_title, image, id } = data
  const favorites = useSelector(selectFavorites)
  const isSelected = favorites.findIndex((favorite: any) => favorite.title === title)

  return (
    <View key={id} style={styles.itemContainer}>
      <TouchableRipple style={{ borderRadius: 12 }} borderless onPress={handleGoToBenefit}>
        <ImageBackground borderRadius={12} resizeMode='cover' style={styles.image} source={getImage(image)}>
          {isSelected !== -1 && (
            <View style={styles.itemFavorite}>
              <MaterialIcon size={20} color={Colors.primary} name={'cards-heart'} />
            </View>
          )}
          <SalesTitleItem saleTitle={sale_title} />
        </ImageBackground>
      </TouchableRipple>
      <Typography.Subtitle numberOfLines={2} mt={8}>
        {title}
      </Typography.Subtitle>
    </View>
  )
}
