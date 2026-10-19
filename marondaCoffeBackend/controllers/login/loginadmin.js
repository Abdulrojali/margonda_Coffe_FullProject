const {accountsAdmin} = require('../../models/accounts')
const bcrypt = require('bcrypt')
async function loginAccountsAdmin(req,res){
    try{
        const {user,pass} = req.body
        const authUsernameAdmin= await accountsAdmin.findOne({username:user},{password:1})
        console.log(authUsernameAdmin.password)
    let authPasswordAdmin= bcrypt.compare(pass,authUsernameAdmin.password)
    console.log(authPasswordAdmin)
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
module.exports={loginAccountsAdmin,getAccountsadmin}