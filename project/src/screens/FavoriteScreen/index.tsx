import { BenefitsItem, EmptyFavorites } from '@/components'
import { Screens } from '@/constants'
import { selectFavorites } from '@/selectors'
import { Typography } from '@/ui'
import { useScrollToTop } from '@react-navigation/native'
import React, { useRef } from 'react'
import { ScrollView, View } from 'react-native'
import { useSelector } from 'react-redux'
import { styles } from './styles'

export const FavoriteScreen = () => {
  const favorites = useSelector(selectFavorites)
  const ref = useRef<ScrollView>(null)
  useScrollToTop(ref)

  return (
    <View style={styles.container}>
      {favorites.length === 0 ? (
        <EmptyFavorites />
      ) : (
        <ScrollView ref={ref} contentContainerStyle={styles.content} showsVerticalScrollIndicator>
          <Typography.Main mb={24}>Избранное</Typography.Main>
          {favorites.map((item: any) => (
            <BenefitsItem
              length={favorites?.length}
              isAnimated={true}
              key={item.title}
              data={item}
              screen={Screens.benefitFavorite}
              favorite={true}
            />
          ))}
        </ScrollView>
      )}
    </View>
  )
}
