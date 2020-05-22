import React from 'react'

interface ILogo {
    styles?: React.CSSProperties
}

export const Logo: React.FC<ILogo> = ({ styles }) =>

    <h2 className="logo" style={ styles } >pitch</h2>