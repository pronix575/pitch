import React from 'react'
import './form.scss'
import { Flex } from '../grid/Flex'


interface IForm {
    onSubmit?: any
    styles?: {} 
}

export const Form: React.FC<IForm> = ({ onSubmit, children, styles }) => 

    <Flex className="w100">
        <form className="form" style={ styles } onSubmit={ onSubmit }>
            { children }
        </form>
    </Flex>