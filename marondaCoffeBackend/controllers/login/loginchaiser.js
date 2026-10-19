const {accountsChasier} = require('../../models/accounts')
const bcrypt = require('bcrypt')


 async function loginAccountsChasier(req,res){
    const {user,pass} = req.body
    const authUsernameChasier= await accountsChasier.findOne({username:user},{password:1})
    console.log(authUsernameChasier.password)
    let authPasswordChasier=bcrypt.compare(pass,authUsernameChasier.password)
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


module.exports={loginAccountsChasier,getAccountsChasier}
