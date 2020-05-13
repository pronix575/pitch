import React from 'react'

export const FlexBLock: React.FC = ({ children }) => 

<div className="notifications flex w100 p1">
    <div className="notificationsWrap w100">
        <div className="flex w100 p1h">{ children }</div>
    </div>
</div>