import { Colors } from '@/constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lighGray,
    backgroundColor: Colors.white,
  },
  searchContainer: {
    marginLeft: 16,
    marginRight: 8,
  },
  itemContainer: {
    padding: 12,
    backgroundColor: Colors.lighGray,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
  },
})
