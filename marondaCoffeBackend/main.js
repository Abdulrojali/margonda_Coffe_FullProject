const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app =express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())


const connectDB = require("./server"); 
connectDB();

const {routerLoginAdmin} =require("./routers/login/admin")
const {routerLoginChasier} =require("./routers/login/chaiser")
// login Accounts login admin
app.use('/login/admin',routerLoginAdmin)
app.use('/login/chaiser',routerLoginChasier)


const {routerAdmin,routerChasier} = require('./routers/createAccountsRouter')
// createAccounts chasier and admin
app.use('/chasier',routerChasier)
app.use('/admin',routerAdmin)


const checkoutRouter= require('./routers/checkoutRouter')
app.use('/chasier/checkout',checkoutRouter)


app.listen(8080,()=>{
    console.log('http://localhost:8080')
})