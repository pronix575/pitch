import { Reducer, State, Action, Handlers } from "../../types"

import { LOGIN, DEFAULT } from "../types"

const initialState: { isAuth: boolean, token: string | null } = {
    isAuth: false,
    token: null,
}

const handlers: Handlers = {
    [LOGIN]: (state, { payload }) => ({ ...state, isAuth: true, token: payload.token }),
    [DEFAULT]: (state: State) => state 
}

export const authReducer: Reducer = (state = initialState, action: Action) => {
 
    const handle =  handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}