const mongoose = require('mongoose')
const User = require('./models/user')

mongoose.connect('mongodb://root:0000@127.0.0.1/testDatabase?authSource=admin')
const db = mongoose.connection

db.on('error',err =>{
    console.error('\u001b[31m' +'MongoDB error ' + '\u001b[0m' + err.message)
    process.exit(1)
})
db.once('open',()=> console.log('MongoDB connection established'))


module.exports = {
    getUser:async(options = {})=>{ return User.find(options) },
}
