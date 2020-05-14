import { GetUsers, CreateUser, CreateUserResolver } from "../../../types"
import { User } from "../../../models/User"
import bcrypt from 'bcryptjs'
import { userValidation } from "../../../validator/validator"
import shortid from 'shortid'
import jwt from 'jsonwebtoken'
import config from 'config'

export const getUsers: GetUsers = async (_, { token }) => {
    try {
        const users = await User.find({}, { _id: 0, password: 0 }) || []           
        return users
            
    } catch (e) {
        console.error(e)
        return []
    }
}

const createUser: CreateUser = async (userName, email, password) => {
    try {
        
        const validation = userValidation(userName, email, password)

        if ( validation.message === 'success' ) {

            const hashedPassword = await bcrypt.hash(password, 12)
            const newShortid = shortid.generate()
            
            const settings = {
                avatar: { url: '' },
                isDarkTheme: true
            }

            const candidate = await User.findOne({ email })

            // user checking
            if (candidate) { return { message: "a user with such an email already exists" } }

            const user = new User({ userName, shortid: newShortid, email, password: hashedPassword, settings })                                                                                                                                                                                                                                                     
            user.save()

            const newUser = await User.findOne({ shortid: shortid }, { _id: 0, password: 0 }) || {  
                userName, email, shortid, settings
            }

            const token = jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: '24h' }
            )


            if (newUser) {
                return { user: newUser, message: 'success', token }
            }

            return { message: "error in user creating process" } 
        }

        return validation

    } catch (e) {

        console.log(e)
        return { message: "server error" }
    }
}

export const createUserResolver: CreateUserResolver = async (_: any, { userName, email, password }) => {
            
    if (userName && email && password) {
        const response = createUser(userName, email, password)

        if (response) { 
            return response
        }

        return { message: "error" }
    }
}