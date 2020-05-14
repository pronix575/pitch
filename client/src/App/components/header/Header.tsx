import React from 'react'
import './header.scss'
import { RootState } from '../../redux/rootState'
import { useSelector } from 'react-redux'
import { AuthHeader } from './authHeader/AuthHeader'
import { BaseHeader } from './baseHeader/BaseHeader'

export const Header: React.FC = () => {

    const isAuth = useSelector((state: RootState) => state.auth.isAuth)

    const header = isAuth ?
        
        <BaseHeader />
        :
        <AuthHeader />
    
    return header
}