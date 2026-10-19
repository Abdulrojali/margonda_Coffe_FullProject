const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
})

const accountsChasier = mongoose.model('accountsChasier',schema)
const accountsAdmin = mongoose.model('accountsAdmin',schema)
module.exports = {accountsChasier,accountsAdmin}