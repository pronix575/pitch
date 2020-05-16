import { Schema, model, isValidObjectId, Types } from 'mongoose'

const postSchema = new Schema({
    shortid: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    views: {
        type: Number,
        required: true
    },
    likes: [{
        creator: {
            type: String,
            required: true
        },
        createdDate: {
            type: Date,
            required: true
        }
    }],
    creator: {
        type: Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdDate: {
            type: Date,
            required: true
    },
    media: [{
        mediaType: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }]
})
 
export const Post = model('Post', postSchema)