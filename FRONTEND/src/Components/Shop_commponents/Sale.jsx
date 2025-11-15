import React from "react";
import { Front, FrontSale } from "../../assets/assets";



const Sale = () => {
  return (
    <>
      <section className="sale-section py-5">
        <div className="front-container">
            <img src={Front.front2} className="img-fluid" />
          <div className="row justify-content-center g-4">
            
            {
                FrontSale.map((FrontSale , index) => (
                    
                      <div className="col-md-4 col-12">
                        <div className="center">
              <div className="sale-card position-relative overflow-hidden">
                <img src={FrontSale.img} alt="Sale" className="img-fluid w-100" />
                <div className="sale-overlay position-absolute top-0 start-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center">
                  <p className="sale-text mb-0">Check Out</p>
                  <h3 className="fw-bold">ONLINE SALE</h3>
                  <h1 className="discount">-25%</h1>
                </div>
              </div>
              </div>
            </div>
                ))
            }
           

        
          </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col text-center my-5">
                    <h4>All For Home</h4>
                    <h1>Home product sections</h1>
                    <p>Lorem ipsum dolor sit amet, lorem ipsn gravida nibh vel velit auctor aliquet. Aenean sollicitudin lorem quis bibendum auci elit consequat.</p>
                </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Sale;
