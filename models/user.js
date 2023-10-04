const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    githubID: {
        type: String,
        required: true
    }
},

{
    collection: 'users',
    versionKey: false
})

module.exports = mongoose.model('user', userSchema)