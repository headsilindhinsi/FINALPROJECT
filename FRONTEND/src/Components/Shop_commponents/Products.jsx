import React from 'react'
import { ShopBack } from '../../assets/assets'
import Footer from '../Common_components/Footer'
import ShopHome from './ShopHome'
import Navbar from '../Common_components/Navbar'




const Products = () => {
  return (
    
    <>
    <Navbar />
      <section className="shop-hero" style={{ backgroundImage: `url(${ShopBack.source})` }}>
      <div className="shop-hero-overlay">
        <div className="shop-hero-content">
          <h6>WE OFFER ONLY</h6>
          <h1>The Best Products</h1>
          <hr />
          <p>
           Designing our space with All4Home has been a truly refreshing experience.
          </p>
          <button className="btn-buy">BUY NOW</button>
        </div>
      </div>


     
    </section>

   <ShopHome />
    


    <Footer/>
    </>
  )
}

export default Products