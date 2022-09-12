import { FireIcon, SearchIcon } from '@/assets'
import { categories, Colors } from '@/constants'
import { selectHeaderIndex } from '@/selectors'
import { setHeaderIndex } from '@/slices'
import { Typography } from '@/ui'
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useRef } from 'react'
import { FlatList, View } from 'react-native'
import { TouchableRipple } from 'react-native-paper'
import { useDispatch, useSelector } from 'react-redux'
import { styles } from './styles'

interface ICategories {
  title: string
  id: string
}

type FlatListType = {
  item: ICategories
}

export const HomeHeader = (props: any) => {
  const ref = useRef<FlatList>(null)
  const navigation = useNavigation<any>()
  const headerIndex = useSelector(selectHeaderIndex)
  const dispatch = useDispatch()

  useEffect(() => {
    ref.current?.scrollToIndex({
      index: headerIndex,
      animated: true,
      viewOffset: 8,
      viewPosition: 0.05,
    })
  }, [headerIndex])

  const keyExtractor = (item: ICategories) => item.id
  const renderItem = ({ item }: FlatListType) => {
    const { title, id } = item
    const isSelected = headerIndex === +id
    const backgroundColor = isSelected ? Colors.primary : Colors.lighGray
    const color = isSelected ? Colors.white : Colors.darkBlue

    const handleGoToBenefits = () => {
      dispatch(setHeaderIndex(+id))
    }

    return (
      <TouchableRipple
        style={{ borderRadius: 12, marginRight: 8 }}
        onPress={handleGoToBenefits}
        key={id}
        borderless
        {...props}
      >
        <View style={[styles.itemContainer, { backgroundColor }]}>
          {id === '0' ? <FireIcon fill={color} /> : null}
          <Typography.Subtitle ml={id === '0' ? 8 : 0} color={color}>
            {title}
          </Typography.Subtitle>
        </View>
      </TouchableRipple>
    )
  }

  return (
    <View style={styles.container}>
      <View style={[styles.itemContainer, styles.searchContainer]}>
        <SearchIcon />
      </View>
      <FlatList
        ref={ref}
        onScrollToIndexFailed={() => {
          const wait = new Promise((resolve: any) => setTimeout(resolve, 0))
          wait.then(() => {
            ref.current?.scrollToIndex({
              index: headerIndex,
              animated: true,
              viewOffset: 8,
              viewPosition: 0.05,
            })
          })
        }}
        decelerationRate='fast'
        initialScrollIndex={headerIndex}
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
      />
    </View>
  )
}
