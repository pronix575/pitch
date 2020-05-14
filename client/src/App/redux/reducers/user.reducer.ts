import { Reducer, State, Action, Handlers, User } from "../../types"

import { LOGIN, DEFAULT } from "../types"

const initialState: User = {
    userName: null,
    email: null,
    shortid: null,
    settings: null
}

const handlers: Handlers = {
    [LOGIN]: (state, { payload }) => ({ ...state, isAuth: true, token: payload.token }),
    [DEFAULT]: (state: State) => state 
}

export const userReducer: Reducer = (state = initialState, action: Action) => {
    const handle =  handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}