import { IResolvers } from "apollo-server-express"
import { getUsers, createUserResolver } from "./auth/user.resolver"
import { loginResolver } from "./auth/auth.rosolver"

export const resolvers: IResolvers = {
    Query: {
        users: getUsers,
        login: loginResolver
    },
    Mutation: {
        createUser: createUserResolver
    }
}