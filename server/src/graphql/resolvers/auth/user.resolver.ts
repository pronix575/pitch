import { GetUsers, CreateUser, CreateUserResolver } from "../../../types"
import { User } from "../../../models/User"
import bcrypt from 'bcryptjs'
import { userValidation } from "../../../validator/validator"
import shortid from 'shortid'
import jwt from 'jsonwebtoken'
import config from 'config'
import { authMiddleware } from "../../middlewares"

export const getUsers: GetUsers = async (_, { token }) => {

    const userid = authMiddleware(token)

    if (!userid) {
        return { message: "you don't have permission for this" }
    }

    try {

        const users = await User.find({}, { _id: 0, password: 0 })         
        return { 
            users,
            message: 'success'
        }
            
    } catch (e) {
        console.error(e)
        return { message: "server error" }
    }
}

const createUser: CreateUser = async (userName, email, password) => {
    try {
        
        const validation = userValidation(userName, email, password)

        if ( validation.message === 'success' ) {

            const hashedPassword = await bcrypt.hash(password, 12)
            const newShortid = shortid.generate()

            const candidate = await User.findOne({ email })
                
            // user checking
            if (candidate) { return { message: "a user with such an email already exists" } }

            const user = new User({ 
                userName, 
                shortid: newShortid, 
                email, 
                password: hashedPassword, 
                avatar: '', 
                createdDate: new Date() 
            })                                                                                                                                                                                                                                                     
            user.save()

            const token = jwt.sign(
                { id: user._id },
                config.get('jwtSecret'),
                { expiresIn: '24h' }
            )

            return { message: 'success', token }
        }

        return validation

    } catch (e) {

        console.log(e)
        return { message: "server error" }
    }
}

export const createUserResolver: CreateUserResolver = async (_: any, { userName, email, password }) => {
            
    if (userName && email && password) {
        const response = await createUser(userName, email, password)

        if (response) { 
            return response
        }

        return { message: "error" }
    }
}