const express = require('express')
const routerLoginAdmin = express.Router()
const {loginAccountsAdmin,getAccountsadmin} =require("../../controllers/login/loginadmin")

routerLoginAdmin.post('',loginAccountsAdmin)
routerLoginAdmin.get('',getAccountsadmin)




module.exports={routerLoginAdmin}