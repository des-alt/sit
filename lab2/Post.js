import mongoose from 'mongoose'

const Post = new mongoose.Schema({
    // author:{type: String, required: true},
    // title:{type: String, required: true},
    // content:{type: String, required: true},
    // picture:{type: String}
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    group:{type: String, required: true},
    createdAt:{type: Date},
    updatedAt:{type: Date}
})

export default mongoose.model('Post', Post)