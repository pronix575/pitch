import React from 'react'
import { Notification } from '../../types'

interface IPush {
    notification: Notification
}

export const Push: React.FC<IPush> = ({ notification }) => {

    const classList: string[] = []
    let message: 'warning' | 'error'

    switch (notification.type) {
        case 'ERROR': 
            classList.push('errorNotification')
            message = 'error'
            break;
        case 'WARNING':
            classList.push('warningNotification')
            message = 'warning'
    }

    return (
        <div className={ `pushNotification ${ classList.join(' ') || '' }`} > 
            <div className="notificationMessage">
                <span>
                    { message + ': ' }
                </span> 
                <br/>
                <div>
                    { notification.message }
                </div>
            </div>
        </div>
    )
}