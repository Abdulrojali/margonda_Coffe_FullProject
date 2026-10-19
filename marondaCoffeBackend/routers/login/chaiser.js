const express = require('express')
const routerLoginChasier = express.Router()

const {loginAccountsChasier,getAccountsChasier} = require("../../controllers/login/loginchaiser")
// chasier
routerLoginChasier.post('',loginAccountsChasier)
routerLoginChasier.get('',getAccountsChasier)


module.exports={routerLoginChasier}