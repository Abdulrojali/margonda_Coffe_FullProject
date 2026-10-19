const mongoose = require('mongoose')

const paymentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    totalAmount:{
        type:String
    },
    paymentMethod:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})


const historyPaymentsSchema= new mongoose.Schema({
    nameCostumers:{
        type:String   
    },
    nameChasier:{
        type:String
    },
    productPurchase:{
        type:Array
    },
    totalAmount:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    }
})


const payments = mongoose.model('payments',paymentSchema)
const historyPayments= mongoose.model('historyPayments',historyPaymentsSchema)
module.exports={historyPayments,payments}