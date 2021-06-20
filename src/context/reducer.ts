import Actions from './types/actionTypes'
import InitialStateType from './types/initialStateType'

export type Action = { type: Actions; payload: any }

export const stationReducer = (state: InitialStateType, action: Action): InitialStateType => {
  const { type, payload } = action

  switch (type) {
    case Actions._SET_STATION:
      return {
        ...state,
        current_station: payload
      }
    default:
      return state
  }
}

export default stationReducer
