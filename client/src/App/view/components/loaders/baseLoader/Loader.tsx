import React from 'react'
import './loader.scss'
import { Flex } from '../../grid/Flex'

interface ILoader {
    styles?: React.CSSProperties
    color?: string
    containerStyles?: React.CSSProperties
}

export const Loader: React.FC<ILoader> = ({ styles, color, containerStyles }) => {

    color && (styles = { ...styles, borderColor: `${ color } transparent transparent transparent` })

    return (   
        <Flex className="lds-ring" styles={ containerStyles }>
            <div style={{ ...styles }}></div>
            <div style={{ ...styles }}></div>
            <div style={{ ...styles }}></div>
            <div style={{ ...styles }}></div>
        </Flex>
    )
}