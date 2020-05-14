import React from 'react'
import { Notification } from '../../types'
import { Motion, PlainStyle, spring } from 'react-motion'
import { FlexEnd } from '../grid/FlexEnd'
import { CloseIcon } from '../icons/CloseIcon'
import { TouchView } from '../touchView/TouchView'
import { useDispatch } from 'react-redux'
import { clearNotifications } from '../../redux/actions/notifications.action'

interface IPush {
    notification: Notification
}

export const Push: React.FC<IPush> = ({ notification }) => {

    const dispatch = useDispatch()

    const classList: string[] = []
    let type: 'warning' | 'error' | 'success'

    switch (notification.type) {
        case 'ERROR': 
            classList.push('errorNotification')
            type = 'error'
            break;
        case 'WARNING':
            classList.push('warningNotification')
            type = 'warning'
            break;
        case 'SUCCESS':
            classList.push('successNotification')
            type = 'success'
            break;
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
            <FlexEnd>
                <div>
                    <span>
                        { type + ': ' }
                    </span> 
                    <br/>
                    <div>
                        { notification.message }
                    </div>
                </div>
                
                
                <TouchView onClick={ () => dispatch(clearNotifications()) }>
                    <CloseIcon style={{ 
                        fontSize: "28px",
                        margin: "3px 0 0 0" 
                    }} />
                </TouchView>
            </FlexEnd>    
        </div>
    </div>

    return (
        <Motion 
            defaultStyle={{ x: -40 }} 
            style={{ 
                x: spring(0, { damping: 10, }) 
            }}
        >
            { value => <Content value={ value } />  }
        </Motion>
    )
}