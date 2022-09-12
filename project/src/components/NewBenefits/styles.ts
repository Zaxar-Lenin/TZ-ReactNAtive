import { Colors } from '@/constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  itemContainer: {
    marginHorizontal: 4,
    width: 240,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerInner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 155,
  },
  itemSale: {
    position: 'absolute',
    left: 12,
    bottom: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: Colors.pink,
    borderRadius: 100,
  },
  showMoreContainer: {
    width: 240,
    height: 155,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.grey,
    borderRadius: 12,
    borderWidth: 1,
    marginHorizontal: 4,
  },
})
