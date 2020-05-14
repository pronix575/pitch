import { IResolvers } from "apollo-server-express"
import { getUsers, createUserResolver } from "./auth/user.resolver"
import { loginResolver, authentificationResolver } from "./auth/auth.rosolver"

export const resolvers: IResolvers = {
    Query: {
        users: getUsers,
        login: loginResolver,
        authentification: authentificationResolver
    },
    Mutation: {
        createUser: createUserResolver
    }
}