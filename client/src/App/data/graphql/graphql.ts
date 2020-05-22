import ApolloClient from 'apollo-boost'

export const gqlClient = new ApolloClient({
  uri: '/graphql',
});