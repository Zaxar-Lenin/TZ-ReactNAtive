import { Colors, Screens } from '@/constants'
import { getImage } from '@/helpers'
import { selectFavorites } from '@/selectors'
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
    image: string
    id: string
    sale_title: string
  }
}

export const NewBenegefitsItem = ({ data }: Props) => {
  const navigation = useNavigation<any>()
  const handleGoToBenefit = () => navigation.navigate(Screens.benefit)

  const { title, image, id, sale_title } = data

  const favorites = useSelector(selectFavorites)
  const isSelected = favorites.findIndex((favorite: any) => favorite.title === title)

  return (
    <TouchableRipple key={id} borderless style={styles.container} onPress={handleGoToBenefit}>
      <ImageBackground style={styles.content} source={getImage(image)}>
        {isSelected !== -1 && (
          <View style={styles.itemFavorite}>
            <MaterialIcon size={20} color={Colors.primary} name={'cards-heart'} />
          </View>
        )}
        <SalesTitleItem saleTitle={sale_title} />
      </ImageBackground>
    </TouchableRipple>
  )
}
