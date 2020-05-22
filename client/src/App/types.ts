import React, { FormEvent } from 'react'
import { ApolloCurrentQueryResult, FetchResult } from 'apollo-boost'
import { Dispatch } from 'redux'

export type Action = {
    type: string,
    payload?: any
}

export type Handlers = { [key: string]: (state: State, payload: Action) => State }
export type State = any

export type Reducer = (state: State, action: Action) => State

export type InitialState = {
    auth: {
        isAuth: boolean,
        token: string | null
    }
}

export type Notification = {
    id: number,
    message: string,
    type: 'ERROR' | 'WARNING' | 'SUCCESS'
}

export type SignInForm = {
    email: string,
    password: string
}

export type SignUpForm = {
    name: string,
    email: string,
    password: string
}


//
export type ChangeEvent = React.ChangeEvent<HTMLInputElement>
export type SubmitEvent = FormEvent<HTMLInputElement>


// GraphQL
export type LoginQuery = (form: SignInForm) => 
    Promise<ApolloCurrentQueryResult<LoginResponse>>

export type UserDataQuery = (token: string) => 
    Promise<ApolloCurrentQueryResult<UserDataResponse>>

export type AuthentificationQuery = (token: string) => 
    Promise<ApolloCurrentQueryResult<AuthentificationData>>

export type CreateUserMutation<T> = (form: SignUpForm) => 
    Promise<FetchResult<T, Record<string, any>, Record<string, any>>>


type Avatar = {
    url: string
}
type Settings = {
    isDarkTheme: boolean
    avatar: Avatar
}

type authentificationDataResponse = {
    token: string,
    message: string
}

export type AuthentificationData = {
    authentification: authentificationDataResponse
}

export type User = {
    userName: string | null,
    email: string | null,
    shortid: string | null,
    settings: Settings | null
}

type Login = {
    user: User,
    token: string,
    message: string
}

type SignUpData = {
    user: User ,
    message: string,
    token: string
}

export type LoginResponse = { login: Login }
export type SignUpResponse = { 
    createUser: SignUpData
}
export type UserDataResponse = {
    userData: {
        message: string,
        user: {
            userName: string
            email: string
            avatar: string
        }
    }
}

// actions

type action = (dispatch: Dispatch) => any

export type newNotification = (notification: Notification, time?: number) => action
export type ClearNotifications = () => action
export type LoginAction = (token: string) => action
export type Authentification = () => action
export type Logout = () => action
export type TurnOnLoading = () => action
export type TurnOffLoading = () => action

// icons interface

export interface Icon {
    styles?: React.CSSProperties
    className?: string
}
