import { AuthMiddleware } from "../types"
import config from 'config'
import jwt from 'jsonwebtoken'

export const authMiddleware: AuthMiddleware = (token) => {
    try {

        const decoded = jwt.verify(token, config.get("jwtSecret"))

        if (typeof decoded === 'string') {
            return { message: decoded }    
        }

        return decoded
    
    } catch (e) {    
        return false
    }
}