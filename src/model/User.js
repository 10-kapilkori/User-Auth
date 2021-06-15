const mongoose = require('mongoose')
const validate = require('validator')

const User = mongoose.model('User', {
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        validate(value) {
            if (!validate.isEmail(value)) {
                throw new Error('Invalid Email_Id')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be positive')
            }
        }
    },
    password: {
        type: String,
        require: true,
        minlength: 7,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot be password')
            }
        }
    },
    mobile: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 10) {
                throw new Error('Invalid Mobile Number')
            }
        }
    }
})

module.exports = User