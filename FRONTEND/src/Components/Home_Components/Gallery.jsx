import React from "react";
import { gallerySection } from "../../assets/assets";

const Gallery = () => {
  return (
    <section className="services-section py-5 position-relative">
      <div className="overlay"></div>

      <div className="container position-relative">
        <div className="row align-items-center">

          {/*  LEFT CONTENT — Static */}
          <div className="col-lg-6">
            <h2 className="services-heading mb-4">
              <span className="big-letter">A</span>bout Us
            </h2>

            <p className="services-text" style={{fontSize: "1.2rem", lineHeight: "1.9", color: "#8b857eff", fontWeight: "400",}}>
              Every home has a story — and we help you tell yours with warmth, elegance, and thoughtful design.  
              From curated décor to personalized styling, our mission is to transform everyday spaces into 
              beautiful, meaningful places you’ll love to live in.
            </p>

           
          </div>

          {/* ✅ RIGHT IMAGE — Static */}
          <div className="col-lg-6 position-relative mt-5 mt-lg-0">
            <div className="image-bg"></div>

            <img src={gallerySection.img} alt="Services" className="img-fluid services-img shadow-sm"/>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
