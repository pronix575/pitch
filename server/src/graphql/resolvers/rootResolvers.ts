import { IResolvers } from "apollo-server-express"
import { getUsers, createUserResolver, userDataResolver } from "./auth/user.resolver"
import { loginResolver, authentificationResolver } from "./auth/auth.rosolver"

export const resolvers: IResolvers = {
    Query: {
        users: getUsers,
        login: loginResolver,
        authentification: authentificationResolver,
        userData: userDataResolver
    },
    Mutation: {
        createUser: createUserResolver
    }
}