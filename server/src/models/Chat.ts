import { Schema, model, Document } from 'mongoose'

interface IChat extends Document {
    
}

const chatSchema = new Schema({
    
})
 
export const Chat = model<IChat>('Chat', chatSchema)

