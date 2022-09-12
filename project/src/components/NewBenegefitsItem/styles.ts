import { Colors } from '@/constants'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: 320,
    height: 170,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: Colors.lighGray,
    marginRight: 8,
  },
  content: {
    width: '100%',
    height: '100%',
  },
  itemFavorite: {
    position: 'absolute',
    right: 12,
    top: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
})
