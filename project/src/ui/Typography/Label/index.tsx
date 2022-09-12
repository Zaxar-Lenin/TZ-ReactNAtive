import { Colors } from '@/constants'
import { getOffset } from '@/helpers'
import { TextPropsTypes } from '@/ui'
import React from 'react'
import { Text } from 'react-native'
import { styles } from './styles'

export const Label: React.FC<TextPropsTypes> = ({
  children,
  style,
  color,
  size = 14,
  lineH = 20,
  textAlign = 'auto',
  type = 'regular',
  ...rest
}) => {
  return (
    <Text
      style={[
        styles.text,
        { color: color ?? Colors.grey, fontSize: size, lineHeight: lineH, textAlign: textAlign },
        style,
        getOffset(rest),
      ]}
      {...rest}
    >
      {children}
    </Text>
  )
}
