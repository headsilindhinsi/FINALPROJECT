import React from 'react'
import { BrowserRouter , Routes , Route} from "react-router-dom"
import ContextProvider from './Context/ContextProvider'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Home from './Pages/Home'
import BedRoom from './Components/Shop_commponents/BedRoom'
import LivingRoom from './Components/Shop_commponents/LivingRoom'
import Products from './Components/Shop_commponents/Products'
import Dynamic from './Pages/Dynamic'
import DiningRoom from './Components/Shop_commponents/DiningRoom'
import Decor from './Components/Shop_commponents/Decor'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Protect from './Pages/Protect'


const App = () => {
  return (
    <>
  
     <BrowserRouter>
     <ContextProvider>
      <Routes>
        <Route path= "/" element={<Register/>}/>
        <Route path='/Login' element={<Protect><Login /></Protect>} />
        <Route path= "/Home" element={<Protect><Home/></Protect>}/>
        <Route path= "/Products" element={<Protect><Products/></Protect>}/>
        <Route path= "/LivingRoom" element={<Protect><LivingRoom/></Protect>}/>
        <Route path='/BedRoom' element={<Protect><BedRoom /></Protect>} />
        <Route path='/DiningRoom' element={<Protect><DiningRoom /></Protect>} />
        <Route path='/Decor' element={<Protect><Decor /></Protect>} />
        <Route path="/Dynamic/:id" element={<Protect><Dynamic/></Protect>}/>
        <Route path="/About-Us" element={<Protect><About/></Protect>}/>
        <Route path="/Contact-Us" element={<Protect><Contact/></Protect>}/>
      </Routes>
    
    </ContextProvider>
    </BrowserRouter>

   
    </>
  )
}

export default App