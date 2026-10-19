const {accountsChasier,accountsAdmin} = require('../models/accounts')
const bcrypt = require('bcrypt')
async function createAccountsChasier(req,res){
    const {user,pass}= req.body
    const salt= bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(pass,salt)
    const createAccounts = await new accountsChasier({
        username:user,
        password:hashPassword
    })
    createAccounts.save()
    res.status(200).send(createAccounts)
}
async function logCreateAccountsChasier(req,res){
    const logChasier = await accountsChasier.find({})
    res.status(200).send(logChasier)
}


async function createAccountsAdmin(req,res) {
    const {user,pass}= req.body
 
    const salt= bcrypt.genSaltSync(10)
     const hashPassword = bcrypt.hashSync(pass,salt)
     const createAccounts= await new accountsAdmin({
        username:user,
        password:hashPassword
    })
    createAccounts.save()
     res.status(200).json({username:user,password:pass,saltData:salt,hashPass:hashPassword})
 
}
async function logCreateAccountsAdmin(req,res){
    const logAdmin = await accountsAdmin.find({})
    res.status(200).send(logAdmin)
}

module.exports={createAccountsChasier,logCreateAccountsChasier,createAccountsAdmin,logCreateAccountsAdmin}