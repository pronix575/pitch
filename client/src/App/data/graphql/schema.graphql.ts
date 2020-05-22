import { gql } from 'apollo-boost'

export const 

GQL_LOGIN = gql`
    query login ($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            message
        }
    }

`,

CREATE_USER = gql`
    mutation ($email: String!, $password:String!, $userName: String!) {
        createUser(userName: $userName, email: $email, password: $password) {
            message
            token
        }
    }
`,

AUTHENTIFICATION = gql`
    query ($token: String!) {
        authentification(token: $token) {
            message
            token
        }
    }
`,

USER_DATA = gql`
    query ($token: String!) {
    userData (token: $token) {
        message
        user {
            email
            userName
           avatar
        }
    }
    }
`
