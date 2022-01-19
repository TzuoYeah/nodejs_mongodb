const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    id: String,
    password: String,
    name: String,
    email:String,
    conment: String
})

const User = mongoose.model('Users', userSchema)




module.exports = User
