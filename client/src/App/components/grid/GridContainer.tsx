import React from 'react'
import './grid.scss'

interface IGridTemplate {
    styles: React.CSSProperties,
    className?: string
}

export const GridContainer: React.FC<IGridTemplate> = ({ children, styles, className }) => {

    return (
        <div className={ `gridContainer ${ className }` } style={ styles }>
            { children }
        </div>
    )
}