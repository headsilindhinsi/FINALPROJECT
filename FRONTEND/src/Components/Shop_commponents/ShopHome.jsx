import React from "react";
import { ShopHomeProducts } from "../../assets/assets";
import { Link } from "react-router-dom";


const ShopHome = () => {
  return (
    <section className="shop-home-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          {ShopHomeProducts.map((value, index) => (
            <div className="col-12 col-sm-6 col-md-5 text-center my-4" key={index}>
              <Link
                to={`/${value.path}`}
                className="text-decoration-none text-dark"
              >
                <div className="arch-container mx-auto">
                  <img src={value.img} alt={value.name} className="arch-image" />
                </div>
                <p className="arch-title mt-3 fw-bold">{value.name}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopHome;
