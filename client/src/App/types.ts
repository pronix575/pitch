import React, { FormEvent } from 'react'
import { ApolloCurrentQueryResult } from 'apollo-boost'
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
    type: 'ERROR' | 'WARNING'
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
export type LoginQuery = (form: SignInForm) => Promise<ApolloCurrentQueryResult<LoginResponse>>
type Avatar = {
    url: string
}
type Settings = {
    isDarkTheme: boolean
    avatar: Avatar
}
type User = {
    userName: string,
    email: string,
    shortid: string,
    settings: Settings
}
type Login = {
    user: User,
    token: string,
    message: string
}
export type LoginResponse = { login: Login }

// actions

type action = (dispatch: Dispatch) => any

type Note = {
    message: string,
    type: 'ERROR' | 'WARNING'
}

export type newNotification = (notification: Note, time?: number) => action
export type LoginAction = (token: string) => action