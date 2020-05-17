import { LoginResolver, AuthentificationResolver } from "../../../types"
import { loginValidator } from "../../../validator/validator"
import jwt from 'jsonwebtoken'
import { User } from "../../../models/User"
import config from 'config'

export const loginResolver: LoginResolver = async (_, { email, password }) => {
    try {

        const res: any = await loginValidator(email, password)
        return res

    } catch (e) {
        return { message: "server error" }
    }
},

authentificationResolver: AuthentificationResolver = async (_, { token }) => {
    try {
        const data: any = jwt.verify(token, config.get("jwtSecret"))
        const userId = data.id
        
        if (!userId) return { message: "uncorrect token" }
        
        const user = await User.findOne({ _id: userId })
        
        if (user) {

            return {
                message: 'success',
                token: jwt.sign(
                    { id: user._id },
                    config.get('jwtSecret'),
                    { expiresIn: '24h' }
                )
            }
        }

        return { message: 'uncorrect data' }

    } catch (e) {
        return { message: 'server error' }
    }
}

