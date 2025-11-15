import React, { createContext, useEffect, useState } from 'react'
import axios from "axios";



export const MyContext = createContext()
const ContextProvider = ( {children }) => {
  
  var url = "https://finalproject-1-s0az.onrender.com"

  var [ category , setCategory ] = useState("")
  var [ type , setType ] = useState("")
  var [ desc , setDesc ] = useState("")
  var [ price , setPrice ] = useState("")
  var [ img , setImg ] = useState("")
  var [ previewImg , setPreviewImg ] = useState("")
  
  var [ productData , setProductData ] = useState([])
  var [ userData , setUserData ] = useState([])

  var [ updateCategory , setUpdateCategory] = useState("")
  var [ updateType , setUpdateType] = useState("")
  var [ updateDesc , setUpdateDesc] = useState("")
  var [ updatePrice , setUpdatePrice] = useState("")
  var [ updatePreviewImg , setUpdatePreviewImg] = useState("")
  var [ updateImg , setUpdateImg] =  useState("")
  var [ updateId , setupdateId] = useState("")
  


  const ImageFun = (e) => {
    var file = e.target.files[0]
    if(file) {
      var reader = new FileReader()
      reader.onloadend = () => {
        setImg(reader.result)
        setPreviewImg(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  var formData = {
      img , category , type , desc , price
    }
    console.log(formData)

 const ProductSubmitFun = async (e) => {
  try{
    e.preventDefault()

    var formData = {
      img , category , type , desc , price
    }

    await axios.post(`${url}/product/add`, formData)
    alert("product Added")
  }
  catch(err) {
    console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
  }
 }

 const FetchProductData = async () => {
  try{
    var productList = await axios.get(`${url}/product/products`)
    setProductData(productList.data)
  }
   catch(err) {
    console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
  }
 }

 const RemoveProduct = async (id) => {
  try{
    if(confirm("Are you sure want to delete this product?")){
      await axios.delete(`${url}/product/remove/${id}`)
      alert("product removed!")
      FetchProductData()
    }
  }
    catch(err) {
    console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
  }
 }


 const UpdateFun = (id) => {
  var product = productData.find( a => a._id === id)
  if(product) {
    setUpdateCategory(product.category)
    setUpdateType(product.type)
    setUpdateDesc(product.desc)
    setUpdatePrice(product.price)
    setUpdateImg(product.img)
    setUpdatePreviewImg(product.img)
    setupdateId(product._id)
    
  }
 }
 const UpdateImageFun = (e) => {
  var file = e.target.files[0]
  if(file) {
    var reader = new FileReader()
    reader.onloadend = () => {
      setUpdateImg(reader.result)
      setUpdatePreviewImg(reader.result)
    }
    reader.readAsDataURL(file)
  }
 }

 const UpdateSubmitFun =  async (e) => {
  try{
    e.preventDefault()

    var updateFormData = {
      category : updateCategory,
      type : updateType,
      desc : updateDesc,
      price : updatePrice,
      img : updateImg
    }

    await axios.put(`${url}/product/update/${updateId}` , updateFormData)
    alert("product added!")
    FetchProductData()
    
  }
   catch(err) {
    console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
  }
 }

 useEffect(() => {
  FetchProductData()
 } , [])

  const FetchUserData = async () => {
  try {
      const userList = await axios.get(`${url}/user/users`)
      setUserData(userList.data)
  }
  catch(err){
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
 }


 const RemoveUser = async (id) => {
  try{
    if(confirm("are you sure you want to delete this user")){
      await axios.delete(`${url}/user/delete/${id}`)
      alert("userdata removed!")
      FetchUserData()
    }
  }
   catch(err){
      console.log(`Error Name : ${err.name} , Error Message : ${err.message}`)
    }
 }

 useEffect(() => {
  FetchUserData()
 })

  var contextValue = {
    category , setCategory,
    type , setType,
    desc , setDesc,
    price , setPrice,
    ImageFun , previewImg,
    ProductSubmitFun,
    productData,
    RemoveProduct,
    UpdateFun,
     updateCategory , setUpdateCategory,
    updateType , setUpdateType,
    updateDesc , setUpdateDesc,
    updatePrice , setUpdatePrice,
    updatePreviewImg , 
    UpdateImageFun,
    UpdateSubmitFun,
    userData,
    RemoveUser
  
  }
  return (
    <>
       <MyContext.Provider value={contextValue}>
        { children }
       </MyContext.Provider>
    </>
  )
}

export default ContextProvider