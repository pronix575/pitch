import { ApolloServer } from "apollo-server-express"
import { resolvers } from './resolvers/rootResolvers'
import typeDefs from './schema.gql'
/// <reference path="../../graphql.d.ts" />

export const server = new ApolloServer({ 
    typeDefs,
    resolvers,
    playground: true
})
