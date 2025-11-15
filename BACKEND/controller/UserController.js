const UserModel = require("../model/UserModel")

const addUser =  async(req , res) => {
    try{
        const { firstName , lastName , email , password} = req.body
        const userData = UserModel({
            firstName , lastName , email , password
        })
         await userData.save()
         res.status(200).send("userData added!")
    }
   catch(err){
    res.status(404).send(`Error Name : ${err.name} , Error message : ${err.message}`)
     }
}

const getUser =  async(req , res) => {
    try{
        const userList = await UserModel.find()
        res.status(200).send(userList)
    }
    catch(err) {
        res.status(404).send(`Error Name : ${err.name} , Error Meassage : ${err.message}`)
    }
}

const removeuser = async (req , res) => {
    try{
        await UserModel.findByIdAndDelete(req.params.id)
        res.status(200).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
     catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}

const loginUser = async(req , res) => {
    try{
        const { email , password } = req.body

        const user = await UserModel.findOne({
            email , password
        })
        if(user) {
        res.status(200).send(user)
        }
        else{
            res.status(404).send("Invalid User!")
        }
    }
     catch(err){
        res.status(404).send(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
}
module.exports = {addUser , getUser , removeuser , loginUser}