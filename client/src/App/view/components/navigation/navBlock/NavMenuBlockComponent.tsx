import React from 'react'
import { NavLink } from 'react-router-dom'
import { NavComponentData } from '../leftDesktopNavMenu/LeftDesktopNavMenu'
import { Flex } from '../../grid/Flex'
import { Range } from '../../grid/Range'

export const NavMenuBlockComponent: React.FC<NavComponentData> = ({ icon, text, to }) => {

    return (
        <NavLink to={ to }>
            <Flex className="navMenuBlockComponent">
                { icon }

                <div 
                    style={{ 
                        width: "100%",
                        margin: "0 0 0 5px" 
                    }}>
                    { text }
                </div>
            </Flex>
            <Range height={ 10 } />
        </NavLink>
    )
}