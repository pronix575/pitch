import { Reducer, State, Action, Handlers } from "../../types"

import { DEFAULT, TURN_ON_LOADING, TURN_OFF_LOADING } from "../types"

const initialState: { isLoading: boolean } = {
    isLoading: false
}

const handlers: Handlers = {
    [TURN_ON_LOADING]: state => ({ 
        ...state,
        isLoading: true        
    }),
    [TURN_OFF_LOADING]: state => ({ 
        ...state, 
        isLoading: false
    }),
    [DEFAULT]: (state: State) => state 
}

export const appReducer: Reducer = (state = initialState, action: Action) => {
 
    const handle =  handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}