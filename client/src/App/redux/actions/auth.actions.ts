import { LoginAction, Authentification, Logout, Notification } from "../../types";
import { LOGIN, LOGOUT, TURN_ON_LOADING, TURN_OFF_LOADING, NEW_NOTIFICATION } from "../types";
import { authentificationQuery } from "../../graphql/queries";
import { Dispatch } from "redux";

const asyncAuth = async (dispatch: Dispatch, token: string) => {
    if (token) {

        try {
            const { data } = await authentificationQuery(token)


            if (data?.authentification.message === 'success' && data?.authentification?.token) {
                dispatch({ type: LOGIN, payload: data?.authentification?.token })
                localStorage.setItem("token", data?.authentification?.token)
            }
            
            if (data?.authentification.message !== 'success') {
                dispatch({ type: LOGOUT })
                localStorage.clear()
            }

        } catch (e) {

            const newNote: Notification = {
                id: Date.now(),
                message: 'connection faild',
                type: 'WARNING'
            }

            dispatch({ type: NEW_NOTIFICATION, payload: newNote })
        }
    }

    dispatch({ type: TURN_OFF_LOADING })
}

export const

login: LoginAction = (token) => dispatch => {
    dispatch({ type: LOGIN, payload: token })

    localStorage.setItem( "token", token )
},

authentification: Authentification = () => dispatch => {
    dispatch({ type: TURN_ON_LOADING })
    const token = localStorage.getItem("token")
    
    token && asyncAuth(dispatch, token)
    
    !token && dispatch({ type: TURN_OFF_LOADING })
},

logout: Logout = () => dispatch => {
    localStorage.clear()
    dispatch({ type: TURN_ON_LOADING })
    dispatch({ type: LOGOUT }) 
    window.location.reload();
} 
