const coonnectDB = require("./config/db");

coonnectDB()

const dotenv = require("dotenv")
dotenv.config()

const express = require("express")
const app = express()

const cors = require("cors")
app.use(cors())

app.use(express.json({ limit : "50mb"}))

const productRouter = require("./router/productRouter")
const UserRouter =  require("./router/UserRouter")
app.use("/product" , productRouter)
app.use("/user" , UserRouter)

app.listen(process.env.PORT , () => {
    console.log("server running")
})