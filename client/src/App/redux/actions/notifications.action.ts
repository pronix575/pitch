import { newNotification, Notification } from "../../types";
import { NEW_NOTIFICATION, REMOVE_NOTIFICATION } from "../types";

export const 

sendNewNotification: newNotification = (notification, time) => dispatch => {
    
    const newNote: Notification = {
        id: Date.now(),
        message: notification.message,
        type: notification.type
    }
    
    dispatch({ 
        type: NEW_NOTIFICATION, 
        payload: newNote
    })


    setTimeout(() => {
        dispatch({
            type: REMOVE_NOTIFICATION,
            payload: newNote.id
        })
    }, time || 4000)
}