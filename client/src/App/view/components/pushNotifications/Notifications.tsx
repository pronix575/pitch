import React from 'react'
import { useSelector } from 'react-redux'
import { Notification } from '../../../types'
import { Push } from './Push'
import './notifications.scss'
import { FlexBLock } from '../grid/FlexBlock'

export const Notifications: React.FC = () => {

    const notifications: Array<Notification> = useSelector((state: any) => state.notification.notifications)

    return (
        <FlexBLock>
            {
                notifications.map( 
                    (not: Notification) =>
                        
                    <Push 
                        key={ not.id.toString() + Math.round((Math.random() * 10000000)).toString() } 
                        notification={ not } 
                    />
                )
            }
        </FlexBLock>
    )
}