import { Colors } from '@/constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  showMoreContainer: {
    width: 240,
    height: 135,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.grey,
    borderRadius: 12,
    borderWidth: 1,
    marginHorizontal: 4,
  },
})
