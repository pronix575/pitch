import { gql } from 'apollo-boost'

export const GQL_LOGIN = gql`

    query login ($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        user {
            userName
            email
            shortid
            settings {
                isDarkTheme
                avatar {
                    url
                }
            }
        }
        token
        message
        }
    }

`