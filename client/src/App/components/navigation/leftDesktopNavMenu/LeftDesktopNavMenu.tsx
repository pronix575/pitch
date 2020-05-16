import React from 'react'
import { HomeIcon } from '../../icons/HomeIcon'
import './leftNavMenu.scss'
import { NavMenuBlockComponent } from '../navBlock/NavMenuBlockComponent'
import { FeedIcon } from '../../icons/FeedIcon'

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
            icon: <HomeIcon />,
            text: 'home',
            to: '/profile'
        },
        {
            key: 2,
            icon: <FeedIcon />,
            text: 'feed',
            to: '/feed'
        }
    ]

    return (
        <div 
            className="leftNavMeny p1h blockContainer" 
            style={{ margin: "10px 0 0 5px" }}
        >
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