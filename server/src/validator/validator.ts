import validator from 'validator'
import { UserValidation, LoginValidator } from '../types'
import { User } from '../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'

type Message = {
    message: string
}

const isNormalPassword = (password: string): boolean | Message => {
    if (password.length < 6) {
        return true
    } 

    return {
        message: "password must contain more than 5 characters" 
    }
}

const isNormalUserName = (name: string): boolean | Message => {
    
    if (name.length < 3) {
        return true
    } 

    return {
        message: "name must contain more than 3 characters" 
    }
}

const isNormalEmail = (email: string): Message | boolean => {
    if ( !validator.isEmail(email) ) { return { message: "uncorrect email" } } else { return true }
}

export const userValidation: UserValidation = ( userName, email, password ) => {
    const emailValidation = validator.isEmail(email),
          passwordValidation = isNormalPassword(password),
          usernameValidation = isNormalUserName(userName)
    
    if ( emailValidation && passwordValidation && usernameValidation ) {
        return { message: 'successs' }
    }

    const messages: Array<object> = []

    if ( !emailValidation ) { messages.push({ message: "uncorrect email" }) }
    if ( typeof passwordValidation !== 'boolean' ) { messages.push( passwordValidation ) }
    if ( typeof usernameValidation !== 'boolean' ) { messages.push( usernameValidation ) }

    return { messages } 
}

export const loginValidator: LoginValidator = async (email, password) => { 
    
    if (!isNormalEmail(email)) { return { message: "uncorrect email" } }

    // I have no idea how to make it better
    const user: any = await User.findOne({ email }, { _id: 0 })

    if (!user) { return { message: "uncorrect password or email" } }

    const isMatch: boolean = await bcrypt.compare(password, user.password)

    if (!isMatch) { return { message: "uncorrect password or email" } }

    const token = jwt.sign(
        { id: user._id },
        config.get('jwtSecret'),
        { expiresIn: '24h' }
    )

    user.password = null

    return { user, token, message: 'success' }
}
