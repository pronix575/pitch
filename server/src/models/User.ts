import { Schema, model, Document, Types } from 'mongoose'

interface IUser extends Document {
    userName: string
    shortid: string
    email: string
    password: string
    avatar: string
    subscribers: Array<string>
    subscriptions: Array<string>,
    createdDate: Date
}

const userSchema = new Schema({
    userName: {
        type: String,
        required: true 
    },
    shortid: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true  
    },
    avatar: {
        type: String
    },
    subscribers: [{
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }],
    subscriptions: [{
        type: Types.ObjectId,
        ref: 'User',
        required: true
    }],
    createdDate: {
        type: Date,
        required: true
    }
})
 
export const User = model<IUser>('User', userSchema)
