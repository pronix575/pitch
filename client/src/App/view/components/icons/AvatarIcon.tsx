import React from 'react'

interface IAvatarIcon {
    styles?: React.CSSProperties
    className?: string
}

export const AvatarIcon: React.FC<IAvatarIcon> = ({ styles, className = '' }) => 
    
    <div style={{ ...styles }} className={ className }>
        <svg className="bi bi-people-circle" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 008 15a6.987 6.987 0 005.468-2.63z"/>
            <path fillRule="evenodd" d="M8 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
            <path fillRule="evenodd" d="M8 1a7 7 0 100 14A7 7 0 008 1zM0 8a8 8 0 1116 0A8 8 0 010 8z" clipRule="evenodd"/>
        </svg>
    </div>    