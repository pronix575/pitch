import React from 'react'
import { useSelector } from 'react-redux'
import { Notification } from '../../types'
import { Push } from './Push'
import './notifications.scss'

export const Notifications: React.FC = () => {

    const notifications: Array<Notification> = useSelector((state: any) => state.notification.notifications)

    return (
        <div className="notifications flex w100 p1">
            <div className="notificationsWrap w100">
                    <div className="flex w100 p1h">
                        {
                            notifications.map(
                                (not: Notification) => 
                                    
                                <Push 
                                    key={ not.id.toString() + Math.round((Math.random() * 10000000)).toString() } 
                                    notification={ not } 
                                />
                            )
                        }
                    </div>
            </div>
        </div>
    )
}