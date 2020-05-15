import validator from 'validator'
import { UserValidation, LoginValidator, Message } from '../types'
import { User } from '../models/User'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import config from 'config'

export const isNormalPassword = (password: string): Message => {

    if (password.length > 25) {
        return { message: 'name must be 25 characters or less' }
    }

    if (password.length >= 6) {
        return { message: 'success' }
    } 

    return {
        message: "password must contain more than 5 characters" 
    }
}

export const isNormalUserName = (name: string): Message => {
    
    if (name.length > 25) {
        return { message: 'name must be 25 characters or less' }
    }

    if (name.length > 3) {
        return { message: 'success' }
    } 

    return {
        message: "name must contain more than 3 characters" 
    }
}

export const isNormalEmail = (email: string): Message | boolean => {
    if ( !validator.isEmail(email) ) { return { message: "uncorrect email" } } else { return true }
}

export const userValidation: UserValidation = ( userName, email, password ) => {

    const emailValidation = validator.isEmail(email),
          passwordValidation = isNormalPassword(password),
          usernameValidation = isNormalUserName(userName)
    
    if ( emailValidation && passwordValidation.message === 'success' && usernameValidation.message === 'success' ) {
        return { message: 'success' }
    }

    if ( emailValidation && passwordValidation && usernameValidation ) {

        const messages: Array<Message> = []
    
        if ( !emailValidation ) { messages.push({ message: "uncorrect email" }) }
        if ( passwordValidation.message !== 'success' ) { messages.push( passwordValidation ) }
        if ( usernameValidation.message !== 'success' ) { messages.push( usernameValidation ) }

        return { message: messages[messages.length - 1].message || 'server error' } 
    }

    if ( !emailValidation ) return { message: 'uncorrect email address' }

    return { message: 'server error' }
}

export const loginValidator: LoginValidator = async (email, password) => { 
    
    if (!isNormalEmail(email)) { return { message: "uncorrect email" } }

    // I have no idea how to make it better
    const user: any = await User.findOne( { email })

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
