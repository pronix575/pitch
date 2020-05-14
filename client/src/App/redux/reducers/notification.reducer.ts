import { Reducer, State, Action, Handlers, Notification } from "../../types"

import { NEW_NOTIFICATION, CLEAR_NOTIFICATIONS, DEFAULT } from "../types"

const initialState: { notifications: Array<Notification> } = {
    notifications: []
}

const handlers: Handlers = {
    [NEW_NOTIFICATION]: (state, { payload }) => ({ 
        ...state, 
        // notifications: [ ...state.notifications, payload ]
        notifications: [ payload ]
    }),

    [CLEAR_NOTIFICATIONS]: (state) => ({ 
        ...state,
        notifications: []
    }),

    [DEFAULT]: (state: State) => state 
}

export const notificationReducer: Reducer = (state = initialState, action: Action) => {
 
    const handle =  handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}