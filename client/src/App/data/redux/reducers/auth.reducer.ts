import { Reducer, State, Action, Handlers } from "../../../types"

import { LOGIN, DEFAULT, LOGOUT } from "../types"

const initialState: { isAuth: boolean, token: string | null } = {
    isAuth: false,
    token: null,
}

const handlers: Handlers = {
    [LOGIN]: (state, { payload }) => ({ 
        ...state, isAuth: true, 
        token: payload
    }),
    [LOGOUT]: (state) => ({ 
        ...state, 
        isAuth: false,
        token: null 
    }),
    [DEFAULT]: (state: State) => state 
}

export const authReducer: Reducer = (state = initialState, action: Action) => {
 
    const handle =  handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}