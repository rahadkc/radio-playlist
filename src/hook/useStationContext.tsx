import * as React from 'react'
import { ReducerContext } from '../context'

export const useStationContext = () => {
  const props = React.useContext(ReducerContext)
  return { ...props }
}

export default useStationContext
