import { BenefitsItem } from '@/components'
import { selectFavorites } from '@/selectors'
import { setHeaderIndex } from '@/slices'
import { Typography } from '@/ui'
import { useFocusEffect, useScrollToTop } from '@react-navigation/native'
import React, { useRef } from 'react'
import { BackHandler, ScrollView } from 'react-native'
import GestureRecognizer from 'react-native-swipe-gestures'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'

interface IBenefits {
  title: string
  sale_title: string
  image: string
  description: string
  id: string
}

type Props = {
  info: { title: string; data: IBenefits[]; id: string }
}

export const BenefitsScreen = ({ info }: Props) => {
  const favorites = useSelector(selectFavorites)
  const dispatch = useDispatch()

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        dispatch(setHeaderIndex(0))

        return true
      }

      BackHandler.addEventListener('hardwareBackPress', onBackPress)

      return () => BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, [dispatch])
  )

  const ref = useRef(null)
  useScrollToTop(ref)

  const { data, title } = info

  const onSwipe = (gestureName: string) => {
    if (gestureName === 'SWIPE_RIGHT') {
      dispatch(setHeaderIndex(0))
    }
  }

  return (
    <GestureRecognizer onSwipe={onSwipe}>
      <ScrollView
        ref={ref}
        showsVerticalScrollIndicator={false}
        style={styles.container}
        contentContainerStyle={styles.content}
      >
        <Typography.Main mb={24}>{title}</Typography.Main>
        {data.map((item) => {
          const isSelected = favorites.findIndex((favorite: any) => favorite.title === item.title)
          return <BenefitsItem key={item.id} data={item} favorite={isSelected !== -1} />
        })}
      </ScrollView>
    </GestureRecognizer>
  )
}
