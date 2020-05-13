import React from 'react'
import { Notification } from '../../types'
import { Motion, PlainStyle, spring } from 'react-motion'

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

    interface Content {
        value: PlainStyle
    }
    const Content: React.FC<Content> = ({ value }) =>
    
    <div 
        className={ `pushNotification ${ classList.join(' ') || '' }`} 
        style={{ 
            transform: `translateY(${ value.x }px)`,
        }}
    > 
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

    return (
        <Motion defaultStyle={{ x: -40 }} style={{ x: spring(0) }}>
            { value => <Content value={ value } />  }
        </Motion>
    )
}