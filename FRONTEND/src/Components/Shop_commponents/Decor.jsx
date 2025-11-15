import React, { useContext, useState , useEffect} from 'react';
import Navbar from '../Common_components/Navbar';
import Footer from '../Common_components/Footer';
import {  Back } from '../../assets/assets';
import { MyContext } from '../../Context/ContextProvider';


const Decor= () => {

  const { addToCart } = useContext(MyContext);
    const { addToWishlist } = useContext(MyContext)
    const [ products , setProducts ] = useState([])
  
    useEffect(() => {
       fetch("http://localhost:5000/product/products?category=Decor")
   
         .then(res => res.json())
         .then(data => setProducts(data))
         .catch(err => console.log(err));
     }, []);
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar />

      {/* HERO BANNER */}
      <div className='container-fluid my-5 py-5'>
          <div className="banner-wrapper d-flex flex-column justify-content-center align-items-center my-5">
            <h2 className="banner-title">Shop</h2>
            <p className="banner-subtitle">Home Decor</p>
          </div> 
          </div>
          

      <div className="container shop-container">

        <div className="row">

          {/* ✅ RIGHT PRODUCT GRID */}
          

            {/* Products */}
            <div className="row">
              {products.map((value, index) => (
                <div className="col-lg-3 col-md-6 mb-5 text-center" key={index}>
                  
                  <div className="product-card ">

                    <img src={value.img} className="product-img" alt={value.Name} />

                    <div className="product-overlay">
                    <button className="add-cart-btn" onClick={() => addToCart({ ...value, id: value._id })}>  ADD TO CART</button>

                      <button className="add-cart-btn ms-2" onClick={(e) => {    e.stopPropagation();    addToWishlist({ ...value, id: value._id });  }}>
                        <i className="bi bi-suit-heart"></i>
                      </button>

                    </div>
                  </div>

                  <h5 className="p-name mt-3">{value.type}</h5>
                  <h5 className="p-name mt-3">{value.desc}</h5>

                  <p className="p-price">
                    
                    <span className="new-price">${value.price}</span>
                  </p>

                </div>
              ))}
            </div>

          </div>
        </div>
    

      <Footer />
    </>
  );
};

export default Decor;
