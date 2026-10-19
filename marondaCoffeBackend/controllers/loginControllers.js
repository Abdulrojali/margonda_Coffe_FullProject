const {accountsChasier,accountsAdmin} = require('../models/accounts')
const bcrypt = require('bcrypt')


 async function loginAccountsChasier(req,res){
    const {user,pass} = req.body
    const authUsernameChasier= await accountsChasier.findOne({username:user},{password:1})
    console.log(authUsernameChasier)
    let authPasswordChasier=bcrypt.compareSync(pass,authUsernameChasier.password)
        if(authPasswordChasier){
            res.status(200).json({massage:"sukses login",status:200})
        }
        else{
            res.status(401).json({massage:"invalid login",status:401})
        }
}

async function getAccountsChasier(req,res) {
    const getAccountsChasier= await accountsChasier.find({})
    res.status(200).send(getAccountsChasier)
}
async function loginAccountsAdmin(req,res){
    try{
        const {user,pass} = req.body
        const authUsernameAdmin= await accountsAdmin.findOne({username:user},{password:1})
    let authPasswordAdmin= bcrypt.compareSync(pass,authUsernameAdmin.password)
        if(authPasswordAdmin){
            res.status(200).json({massage:"sukses login",status:200})
        }
        else{
            res.status(401).json({massage:"gagal login",status:401})
        }
    }
    catch(err){
        throw new Error(err)
    }
}


async function getAccountsadmin(req,res) {
    const getAccountsadmin= await accountsAdmin.find({})
    res.status(200).send(getAccountsadmin)
}
module.exports={loginAccountsChasier,getAccountsChasier,loginAccountsAdmin,getAccountsadmin}