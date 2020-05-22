import React from 'react'

interface IFlex {
    styles?: React.CSSProperties
    className?: string
}

export const FlexEnd: React.FC<IFlex> = ({ children, styles, className }) => 

    <div className={ "flex-end " + className } style={ styles }>
        { children }
    </div>