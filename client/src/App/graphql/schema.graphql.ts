import { gql } from 'apollo-boost'

export const 

GQL_LOGIN = gql`

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

`,

CREATE_USER = gql`

    mutation ($email: String!, $password:String!, $userName: String!) {
        createUser(userName: $userName, email: $email, password: $password) {
            user {
            ...userData
            }
            message
            token
        }
    }

    fragment userData on User {
        userName
        shortid
        email
        settings {
            ...settingsData 
        }
    }

    fragment settingsData on Settings {
        avatar {
            url
        }   
        
        isDarkTheme
    }

`,

AUTHENTIFICATION = gql`
    query ($token: String!) {
        authentification(token: $token) {
            message
            token
        }
    }
`
