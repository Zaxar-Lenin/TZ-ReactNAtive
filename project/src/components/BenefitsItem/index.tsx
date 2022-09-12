import { Colors, Screens } from '@/constants'
import { getImage } from '@/helpers'
import { removeFavorite, setFavorites } from '@/slices'
import { Typography } from '@/ui'
import MaterialIcon from '@expo/vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ImageBackground, View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { useDispatch } from 'react-redux'
import { SalesTitleItem } from '../SalesTitleItem'
import { styles } from './styles'

type Props = {
  data: { title: string; sale_title: string; image: string; description: string; id: string }
  favorite: boolean
  isAnimated?: boolean
  screen?: string
  length?: number
}

export const BenefitsItem = ({ data, favorite, screen, isAnimated, length }: Props) => {
  const dispatch = useDispatch()
  const { title, sale_title, image, description } = data

  const navigation = useNavigation<any>()
  const handleGoToBenefit = () => navigation.navigate(screen ?? Screens.benefit)

  const [isFavorite, setIsFavorite] = useState(favorite ?? false)
  useEffect(() => {
    setIsFavorite(favorite ?? isFavorite)
  }, [isFavorite, favorite])

  const handleSetFavorite = () => {
    if (isAnimated) {
      handleHideCard()
    } else {
      handleChangeFavorite()
    }
  }

  const scale = useSharedValue(0)
  const iconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    }
  })

  const handleChangeFavorite = () => {
    setIsFavorite((prev) => !prev)
    isFavorite ? dispatch(removeFavorite(title)) : dispatch(setFavorites(data))
  }

  const height = useSharedValue(315)
  const cardScale = useSharedValue(1)
  const handleHideCard = async () => {
    cardScale.value = withTiming(0, { duration: 300 }, () => {
      height.value = withTiming(0, { duration: length !== 1 ? 300 : 0 }, () => {
        runOnJS(handleChangeFavorite)()
      })
    })
  }

  const rStyle = useAnimatedStyle(
    () => ({ height: height.value, transform: [{ scale: cardScale.value }], overflow: 'hidden' }),
    []
  )

  useEffect(() => {
    scale.value = 0
    scale.value = withTiming(1, { duration: 300 })
  }, [isFavorite])

  return (
    <Animated.View style={rStyle}>
      <TouchableRipple borderless style={styles.container} onPress={handleGoToBenefit}>
        <View>
          <ImageBackground borderRadius={12} style={styles.image} source={getImage(image)}>
            <SalesTitleItem saleTitle={sale_title} />
            <TouchableRipple borderless onPress={handleSetFavorite} style={styles.itemFavorite}>
              <Animated.View style={iconStyle}>
                <MaterialIcon
                  size={20}
                  color={isFavorite ? Colors.primary : Colors.darkBlue}
                  name={isFavorite ? 'cards-heart' : 'cards-heart-outline'}
                />
              </Animated.View>
            </TouchableRipple>
          </ImageBackground>
          <Typography.Main numberOfLines={2} size={16} lineH={20} mt={16}>
            {title}
          </Typography.Main>
          <Typography.Label mv={4} numberOfLines={2}>
            {description}
          </Typography.Label>
        </View>
      </TouchableRipple>
    </Animated.View>
  )
}
