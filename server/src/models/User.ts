import { Schema, Types, model } from 'mongoose'

const userSchema = new Schema({
    userName: {
        type: String,
        required: true  
    },
    shortid: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true  
    },
    password: {
        type: String,
        required: true  
    },
    settings: {
        avatar: {
            url: String
        },
        isDarkTheme: {
            type: Boolean,
            required: true
        }
    },
    friends: [{
        type: Types.ObjectId,
        ref: 'User'
    }],
    requests: {
        incoming: [{
            type: Types.ObjectId,
            ref: 'User'
        }],

        from: [{
            type: Types.ObjectId,
            ref: 'User'
        }]
    }
})
 
export const User = model('User', userSchema)