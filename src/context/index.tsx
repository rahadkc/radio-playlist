import * as React from 'react'
import commoninitialState from './initialState'
import stationReducer, { Action } from './reducer'
import InitialStateType from './types/initialStateType'

interface ReducerContextInterface {
  state: InitialStateType
  dispatch: React.Dispatch<Action>
}
export const ReducerContext = React.createContext({} as ReducerContextInterface)

interface CommonProviderInterface {}

export const StationProvider: React.FC<CommonProviderInterface> = ({ children }: any) => {
  const [state, dispatch] = React.useReducer(stationReducer, commoninitialState)

  return (
    <ReducerContext.Provider
      value={{
        state,
        dispatch
      }}
    >
      <>{children}</>
    </ReducerContext.Provider>
  )
}
