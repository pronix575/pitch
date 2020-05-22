type Avatar  = {
    url: string
}

type Settings = {
    avatar: Avatar
}

export type IUser = {
    shortid: string,
    userName: string,
    email: string,
    settings: Settings,
    password: string
}

type Token = {
    token: string
}
export type AuthMiddleware = (token: string) => object | false

type CreateUserResponse = {
    message: string | null,
    user?: any,
    token?: string | null
}

export type CreateUser = (userName: string, email: string, password: string) => Promise<CreateUserResponse>
export type GetUsers = (_: any, token: Token) => Array<IUser> | any

export type Message = {
    message: string
}

export type UserValidation = (userName: string, email: string, password: string) => Message
export type LoginValidator = (email: string, password: string) => object | Promise<any>

type CreateUserData = {
    userName: string,
    email: string,
    password: string
}

type AuthData = {
    email: string,
    password: string
}

type Response = {
    message: string
}

type UserDataQuery = {
    token: string
}

interface LoginResponse extends Response {
    user?: object,
    token?: string,
}

interface AuthentificationResponse extends Response {
    message: string
    token?: string
}

interface UserDataResponse extends Response {
    message: string
}

type AuthDataInit = {
    token: string
}

export type CreateUserResolver = (_: any, data: CreateUserData) => object
export type LoginResolver = (_: any, data: AuthData ) => Promise<LoginResponse>
export type AuthentificationResolver = (_: any, data: AuthDataInit ) => Promise<AuthentificationResponse>
export type UserDataResolver = (_: any, data: UserDataQuery) => Promise<UserDataResponse>