import React from 'react'
import './illustration.scss'

interface IIllustration {
    src: string,
    styles?: React.CSSProperties,
    classList?: Array<string>
}

export const Illustration: React.FC<IIllustration> = ({ src, styles, classList }) => 

    <div className={ classList && classList.join(" ") }>
        <img  className="illustration"  src={ src } style={ styles } alt="" />
    </div>