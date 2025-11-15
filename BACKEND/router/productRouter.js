const express = require("express")
const productRouter = express.Router()

const { addProduct, getProduct, removeProduct, updateProduct , } = require("../controller/productController")

productRouter.post("/add" , addProduct)
productRouter.get("/products" , getProduct )
productRouter.delete("/remove/:id" , removeProduct)
productRouter.put("/update/:id" , updateProduct)

module.exports = productRouter