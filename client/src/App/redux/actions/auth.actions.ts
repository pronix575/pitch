import { LoginAction, Authentification, Logout } from "../../types";
import { LOGIN, LOGOUT } from "../types";
import { authentificationQuery } from "../../graphql/queries";
import { Dispatch } from "redux";

const asyncAuth = async (dispatch: Dispatch, token: string) => {
    if (token) {

        try {
            const { data } = await authentificationQuery(token)

            if (data?.authentification.message === 'success' && data?.authentification?.token) {
                dispatch({ type: LOGIN, payload: token })
            }
            
            dispatch({ type: LOGIN, payload: {} })
        } catch (e) {}
    }
}

export const

login: LoginAction = (token) => dispatch => {
    dispatch({ type: LOGIN, payload: token })

    localStorage.setItem( "token", token )
},

authentification: Authentification = () => dispatch => {
    const token = localStorage.getItem("token")
    
    token && asyncAuth(dispatch, token)
},

logout: Logout = () => dispatch => dispatch({ type: LOGOUT }) 
