import { gqlClient } from "./graphql"
import { GQL_LOGIN } from "./schemea"
import { LoginQuery } from "../types"

export const loginQuery: LoginQuery = async (form) => {

    const data = await gqlClient.query({

        query: GQL_LOGIN,
        variables: {
            email: form.email,
            password: form.password
        }

    })
    
    return data
}