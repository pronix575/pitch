import React from 'react'

interface IRange {
    width?: number
    height?: number
}

export const Range: React.FC<IRange> = ({ width, height }) => 
    
    <div style={{ width: `${ width }px`, height: `${ height }px` }}></div>