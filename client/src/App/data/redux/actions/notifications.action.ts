import { newNotification, Notification, ClearNotifications } from "../../../types";
import { NEW_NOTIFICATION, CLEAR_NOTIFICATIONS } from "../types";

export const 

sendNewNotification: newNotification = (notification) => dispatch => {

    window.navigator.vibrate(20);
    
    const newNote: Notification = {
        id: Date.now(),
        message: notification.message,
        type: notification.type
    }
    
    dispatch({ 
        type: NEW_NOTIFICATION, 
        payload: newNote
    })
},

clearNotifications: ClearNotifications = () => dispatch => dispatch({
    type: CLEAR_NOTIFICATIONS
})