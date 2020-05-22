import React from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { Flex } from '../../grid/Flex'
import { Range } from '../../grid/Range'
import { Button } from '../../buttons/Button'
import { SignInIcon } from '../../icons/SignInIcon'

export const AuthHeader: React.FC = () => {

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
                                <Button classList={ signinClassList }>log in</Button>
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