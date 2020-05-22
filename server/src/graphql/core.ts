import { ApolloServer } from "apollo-server-express"
import { resolvers } from './resolvers/rootResolvers'

/// <reference path="../../graphql.d.ts" />
import typeDefs from './schema.gql'

export const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    playground: true
})
