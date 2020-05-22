import React from 'react'

interface IFlex {
    styles?: React.CSSProperties
    className?: string
}

export const Flex: React.FC<IFlex> = ({ children, styles, className = '' }) => 

    <div className={ "flex " + className || '' } style={ styles }>
        { children }
    </div>