import { Reducer, State, Action, Handlers, Notification } from "../../types"

import { NEW_NOTIFICATION, REMOVE_NOTIFICATION, DEFAULT } from "../types"

const initialState: { notifications: Array<Notification> } = {
    notifications: []
}

const handlers: Handlers = {
    [NEW_NOTIFICATION]: (state, { payload }) => ({ 
        ...state, 
        // notifications: [ ...state.notifications, payload ]
        notifications: [ payload ]
    }),

    [REMOVE_NOTIFICATION]: (state, { payload }) => ({ 
        ...state, 
        notifications: state.notifications.filter( (not: Notification) => not.id !== payload ) 
    }),

    [DEFAULT]: (state: State) => state 
}

export const notificationReducer: Reducer = (state = initialState, action: Action) => {
 
    const handle =  handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}