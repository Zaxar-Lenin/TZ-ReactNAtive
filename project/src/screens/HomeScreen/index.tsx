import { MainSalesCard, NewBenefits } from '@/components'
import { salesData } from '@/constants'
import { selectHeaderIndex } from '@/selectors'
import { Spinner } from '@/ui'
import { useScrollToTop } from '@react-navigation/native'
import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, View } from 'react-native'
import { useSelector } from 'react-redux'
import { BenefitsScreen } from '../BenefitsScreen'
import { styles } from './styles'

export const HomeScreen = () => {
  const ref = useRef<ScrollView>(null)
  useScrollToTop(ref)

  const headerIndex = useSelector(selectHeaderIndex)

  // Emulation of sending a request to the server
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 300)
  }, [headerIndex])

  if (loading) {
    return <Spinner />
  }

  return (
    <View style={styles.container}>
      {headerIndex !== 0 ? (
        <BenefitsScreen info={salesData.data[headerIndex - 1]} />
      ) : (
        <ScrollView ref={ref} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingTop: 32 }}>
          <NewBenefits data={salesData.new} />
          {salesData.data.map((item) => (
            <MainSalesCard key={item.id} arr={item} />
          ))}
        </ScrollView>
      )}
    </View>
  )
}
