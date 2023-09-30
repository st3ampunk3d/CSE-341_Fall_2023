const mongoose = require('mongoose')
const validator = require('../middleware/validate')



const dogSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Please provide a value for 'name'"
    },
    breed: {
        type: String,
        required: "Please provide a value for 'breed'"
    },
    color: {
        type: String,
        required: "Please provide a value for 'color'",
    },
    birthday: {
        type: String,
        required: "Please provide a value for 'birthday'",
        validate: [validator.validateDate, 'Birthday must be before the current date.']
    }
},

{
    collection: 'dogs',
    versionKey: false
})

module.exports = mongoose.model("dogs", dogSchema)