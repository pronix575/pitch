import React from 'react'
import { Flex } from '../../grid/Flex'
import { NavLink } from 'react-router-dom'
import { Button } from '../../buttons/Button'
import { useDispatch } from 'react-redux'
import { logout } from '../../../../data/redux/actions/auth.actions'

export const BaseHeader: React.FC = () => {

    const dispatch = useDispatch()

    return (
        <div className="header flex">
            <div className="container flex-end">
                <Flex>
                    <NavLink to="/">
                        <h2 className="logo">pitch</h2>
                    </NavLink>
                </Flex>

                <Button action={ () => { dispatch(logout()) } }>
                    logout
                </Button>
            </div>
        </div>    
    )
}