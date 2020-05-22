import React from 'react'

interface IWideBlock {
    className?: string,
    styles?: React.CSSProperties
}

export const WideBlock: React.FC<IWideBlock> = ({ children, className }) => 
    
    <div className={ "w100 " + className || '' } >
        { children }
    </div>