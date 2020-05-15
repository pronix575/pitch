import { combineReducers } from "redux"
import { authReducer } from "./reducers/auth.reducer"
import { notificationReducer } from "./reducers/notification.reducer"
import { appReducer } from "./reducers/app.reducer"

export const rootReducer = combineReducers({
    auth: authReducer,
    notification: notificationReducer,
    app: appReducer
})