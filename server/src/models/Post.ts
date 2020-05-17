import { Schema, model, Types, Document } from 'mongoose'

interface IPost extends Document {
    shortid: string
    text: string
    views: number
    linkes: Array<{
        creator: string
        createdDate: Date
    }> 
    creator: string
    createdData: Date
    media: Array<{
        mediaType: string
        url: string
    }>
    storm: string
}

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
 
export const Post = model<IPost>('Post', postSchema)