import { gqlClient } from "./graphql"
import { GQL_LOGIN, AUTHENTIFICATION } from "./schema.graphql"
import { LoginQuery, AuthentificationQuery, AuthentificationData } from "../types"

export const 

loginQuery: LoginQuery = async (form) => {

    const data = await gqlClient.query({

        query: GQL_LOGIN,
        variables: {
            email: form.email,
            password: form.password
        }

    })
    
    return data
},

authentificationQuery: AuthentificationQuery = async (token) => {

    const data = await gqlClient.query<AuthentificationData>({
    
        query: AUTHENTIFICATION,
        variables: {
            token
        }
    })    

    return data
}



