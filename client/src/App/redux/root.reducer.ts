import { combineReducers } from "redux"
import { authReducer } from "./reducers/auth.reducer"
import { notificationReducer } from "./reducers/notification.reducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    notification: notificationReducer
})