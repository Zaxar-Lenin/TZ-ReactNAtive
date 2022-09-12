import React from 'react'
import Svg, { Path } from 'react-native-svg'

type Props = {
  fill: string
}

export const FireIcon = ({ fill }: Props) => {
  return (
    <Svg width='14' height='18' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <Path
        d='M6.167 8.167c-.938.911-2.637.57-3.23-.582l-.7-1.363a6.236 6.236 0 0 0-1.904 4.471v.159c0 3.58 2.985 6.481 6.667 6.481s6.667-2.901 6.667-6.481a5.742 5.742 0 0 0-2.225-4.52l-1.034-.81A5.791 5.791 0 0 1 8.332 2.29L7.952.667c-1.785 1.735-2.56 4.223-2.065 6.63l.28.87Z'
        fill={fill}
      />
    </Svg>
  )
}
