import React from 'react'
import './leftNavMenu.scss'
import { NavMenuBlockComponent } from '../navBlock/NavMenuBlockComponent'
import { FeedIcon } from '../../icons/FeedIcon'
import { AvatarIcon } from '../../icons/AvatarIcon'

export type NavComponentData = {
    key: number
    icon: any,
    text: string,
    to: string
}

export const LeftNavMenu: React.FC = () => {

    const links: Array<NavComponentData> = [
        {
            key: 1,
            icon: <AvatarIcon styles={{ transform: "translateY(4px)" }} />,
            text: 'profile',
            to: '/profile'
        },
        {
            key: 2,
            icon: <FeedIcon styles={{ transform: "translateY(0px)", fontSize: "20px" }} />,
            text: 'feed',
            to: '/feed'
        }
    ]

    return (
        <div className="leftNavMeny blockContainer" >
            { links.map( link => 
                
                <NavMenuBlockComponent 
                    key={ link.key }
                    icon={ link.icon } 
                    text={ link.text } 
                    to={ link.to } 
                />

            ) }
        </div>
    )
}