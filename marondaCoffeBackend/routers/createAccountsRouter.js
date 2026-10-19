const express = require('express')
const routerChasier = express.Router()
const routerAdmin = express.Router()


const {createAccountsChasier,
    logCreateAccountsChasier,
    createAccountsAdmin,
    logCreateAccountsAdmin
}= require('../controllers/createAccountsControllers')

// chasier routers 
routerChasier.post('/createAccounts',createAccountsChasier)
routerChasier.get('/logCreateAccounts',logCreateAccountsChasier)

// admin routers
routerAdmin.post('/createAccounts',createAccountsAdmin)
routerAdmin.get('/logCreateAccounts',logCreateAccountsAdmin)

module.exports={routerChasier,routerAdmin}