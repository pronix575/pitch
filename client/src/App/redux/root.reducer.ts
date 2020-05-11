import { combineReducers } from "redux"
import { authReducer } from "./reducers/auth.reducer"

export const rootReducer = combineReducers({
    auth: authReducer
})