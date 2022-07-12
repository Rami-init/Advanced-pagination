const mongoose = require('mongoose')
const PostsSchema = mongoose.Schema({
    body: {
        type: String,
        required: [true, 'please provide the body'],
    },
    author: {
        type: String,
        required: [true, 'please provide the author'],
    },
    title: {
        type: String,
        required: [true, 'please provide the title'],
    },
})

const Posts = mongoose.model('Posts', PostsSchema)
module.exports = Posts