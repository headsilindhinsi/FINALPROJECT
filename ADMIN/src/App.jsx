import React from 'react'
import { BrowserRouter , Routes , Route } from  "react-router-dom"
import ContextProvider from './context/ContextProvider'
import Product from './Pages/Product'
import Grid from './Pages/Grid'
import User from './Pages/User'





const App = () => {
  return (
    <>

      <BrowserRouter>
     <ContextProvider>
        <Routes>

        <Route path="/" element = {<Product />}/>
        <Route path='/grid' element = {<Grid />} />
        <Route path='/User' element = {<User />} />
      </Routes> 
     </ContextProvider>
       </BrowserRouter>
    </>
  )
}

export default App