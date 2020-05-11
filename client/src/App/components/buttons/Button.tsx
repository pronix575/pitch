import React from 'react'
import './button.scss'
import { Flex } from '../grid/Flex'

interface IButton {
    action?: () => void
    classList?: Array<string>
    styles?: React.CSSProperties
    disabled?: boolean
}

export const Button: React.FC<IButton> = ({ action, classList = ["btn-style-fill-b"], styles, children , disabled}) => 

    <Flex>
        <button 
            disabled={ disabled }
            onClick={ action } 
            className={ 
                "button " + (classList && classList.join(' ')) 
            } 
            style={ { 
                ...(styles || {}), 
                width: '100%' 
            } }
        >
            <Flex styles={{ width: "100%" }}>
                { children }
            </Flex>
        </button>
    </Flex>