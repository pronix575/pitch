import { LoginResolver } from "../../../types";
import { loginValidator } from "../../../validator/validator";

export const loginResolver: LoginResolver = async (_, { email, password }) => {
    try {

        const res: any = await loginValidator(email, password)
        return res

    } catch (e) {
        console.log(e)
        return { message: "error" }
    }
}