import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { useParams } from "react-router-dom";
import { All_Products } from "../../assets/assets";
import Footer from "../Common_components/Footer";

const Header = () => {
  const { id } = useParams();
  const selectedProduct = All_Products.find((a) => a.id === Number(id));

  // ✅ Handle case where no product is found
  if (!selectedProduct) {
    return (
      <div className="container text-center my-5 p-5">
        <h2>Product not found</h2>
      </div>
    );
  }

  return (
    <>
      <div className="container my-5 p-5">
        <div className="row align-items-center">
          {/* Left side - image */}
          <div className="col-lg-6 text-center">
            <img
              src={selectedProduct.img}
              className="img-fluid rounded shadow"
              alt={selectedProduct.Name}
            />
          </div>

          {/* Right side - content */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <h2 className="fw-bold">{selectedProduct.Name}</h2>
            <p className="text-muted mb-2">Category: {selectedProduct.categery}</p>
            <h4 className="text-dark mb-3">₹{selectedProduct.price}</h4>

            <p className="mb-4">
              {selectedProduct.description
                ? selectedProduct.description
                : "This is a beautiful and high-quality product designed to add elegance and comfort to your home."}
            </p>

          

            {/* Optional Accordion for more info */}
            <Accordion className="mt-4">
              <Accordion.Item eventKey="0">
                <Accordion.Header>Product Details</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    <li>Material: Premium Quality</li>
                    <li>Dimensions: 120x60 cm</li>
                    <li>Warranty: 1 Year</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>Shipping & Returns</Accordion.Header>
                <Accordion.Body>
                  Free shipping on all orders above ₹999. Easy returns within 7 days.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    <Footer/>
    </>
    
  );
};

export default Header;
