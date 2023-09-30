const mongoose = require('mongoose')
const validator = require('../middleware/validate')



const ownerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: "Please provide a value for 'firstName'"
    },
    lastName: {
        type: String,
        required: "Please provide a value for 'lastName'"
    },
    location: {
        type: String,
        required: "Please provide a value for 'location'"
    },
    email: {
        type: String,
        required: "Please provide a value for 'email'",
        validate: [validator.validateEmail, 'Please provide a valid email address.'],
    },
    phone: {
        type: String,
        required: "Please provide a value for 'phone'",
        validate: [validator.validatePhone, 'Please enter a valid phone number.']
    },
    membershipDate: {
        type: String,
        required: "Please provide a value for 'membershipDate'",
        validate: [validator.validateDate, 'Membership date cannot be a future date.']
    },
    favoriteColor: {
        type: String,
        required: "Please provide a value for 'favoriteColor'",
    }
},

{
    collection: 'owners',
    versionKey: false
})

module.exports = mongoose.model("owners", ownerSchema)