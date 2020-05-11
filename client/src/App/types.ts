import React, { FormEvent } from 'react'
import { ApolloCurrentQueryResult } from 'apollo-boost'

export type Action = {
    type: string,
    payload?: any
}

export type Handlers = { [key: string]: (state: State, payload: Action) => State }
export type State = {}

export type Reducer = (state: State, action: Action) => State

export type InitialState = {
    auth: {
        isAuth: boolean,
        token: string | null
    }
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

export type ChangeEvent = React.ChangeEvent<HTMLInputElement>
export type SubmitEvent = FormEvent<HTMLInputElement>

export type LoginQuery = (form: SignInForm) => Promise<ApolloCurrentQueryResult<any>>