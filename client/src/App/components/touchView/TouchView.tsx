import React from "react"

interface ITouchView {
    onClick: (event: React.MouseEvent) => void
}

export const TouchView: React.FC<ITouchView> = ({ onClick, children }) =>
    
    <div onClick={ onClick } style={{ cursor: "pointer" }}>
        { children }
    </div>