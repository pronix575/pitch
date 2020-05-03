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


export type CreateUser = (userName: string, email: string, password: string) => object
export type GetUsers = (_: any, token: Token) => Array<IUser> | any

export type UserValidation = (userName: string, email: string, password: string) => object
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

type LoginResponse = {
    user?: object,
    token?: string,
    message: string
}

export type CreateUserResolver = (_: any, data: CreateUserData) => object
export type LoginResolver = (_: any, data: AuthData ) => Promise<LoginResponse>