import React from 'react'
import { About_images } from '../../assets/assets'

const Hero = () => {
  return (
    <>
      <section className="shop-hero" style={{ backgroundImage: `url(${About_images.img})` }}>
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
    </>
  )
}

export default Hero