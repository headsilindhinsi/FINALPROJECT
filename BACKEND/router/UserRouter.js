const express = require("express")
const UserRouter = express.Router()

const { addUser, getUser, removeuser, loginUser} = require("../controller/UserController")
UserRouter.post("/add" , addUser)
UserRouter.get("/users" , getUser)
UserRouter.delete("/delete/:id" , removeuser)
UserRouter.post("/login" , loginUser)

module.exports = UserRouter