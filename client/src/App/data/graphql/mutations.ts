import { gqlClient } from "./graphql"
import { CREATE_USER } from "./schema.graphql"
import { CreateUserMutation, SignUpResponse } from "../../types"

export const createUserMutation: CreateUserMutation<SignUpResponse> = async ({ name, email, password }) => {
    
    const data = await gqlClient.mutate<SignUpResponse>({

        mutation: CREATE_USER,
        variables: {
            "email": email,
            "password": password,
            "userName": name
        }
    })

    return data
}