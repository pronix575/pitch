import React from 'react'
import './header.scss'
import { Button } from '../../buttons/Button'
import { NavLink, useLocation } from 'react-router-dom'
import { Flex } from '../../grid/Flex'
import { SignInIcon } from '../../icons/SignInIcon'
import { Range } from '../../grid/Range'

export const Header: React.FC = () => {

    const  currentLocation = useLocation()
    let isRoot = currentLocation.pathname === '/'

    let signinClassList = [],
        signupClassList = []

    currentLocation.pathname === "/sign-in" && signinClassList.push('btn-style-border')
    currentLocation.pathname === "/sign-up" && signupClassList.push('btn-style-border')

    return (
        <div className="header flex">
            <div className="container flex-end">
                <Flex>
                    <Range width={ 5 } />
                    <NavLink to="/">
                        <h2 className="logo">pitch</h2>
                    </NavLink>
                </Flex>

                <Flex>                    
                    { !isRoot && 
                        <>
                            <NavLink to="/sign-up">
                                <Button classList={ signupClassList }>
                                    sign up
                                </Button>
                            </NavLink>
                            
                            <Range width={ 5 } />

                            <NavLink to="/sign-in">
                                <Button classList={ signinClassList }>login</Button>
                            </NavLink>    
                        </>
                    }

                    { isRoot &&
                        <NavLink to="/sign-in" style={{ color: "var(--base-color)" }}>
                            <Button classList={[ "btn-style-border" ]}>
                                <Flex>
                                    <SignInIcon />
                                </Flex>
                            </Button>
                        </NavLink>
                    }
                </Flex>
            </div>
        </div>
    )
}