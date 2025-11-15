import React from "react";
import { ABOUT, blog } from "../../assets/assets";

const About = () => {
  return (
    <div className="about-container position-relative">
      
      
      <img src={ABOUT.img} className="img-fluid about-img" alt="about"/>

      {/*  Overlay Cards */}
      <div className="overlay-cards container">
        <div className="row">
          {blog.map((item, index) => (
            <div className="col-md-4 col-lg-4 col-12 mb-4" key={index}>
              <div className="card border-0 shadow-sm h-100">
                
                <img src={item.img} className="card-img-top" alt={item.text}/>

                <div className="card-body text-center">
                  <p className="small text-warning">{item.text}</p>

                  <h5 className="fw-bold text-uppercase">{item.subtitle}</h5>

                  <p className="text-pink fst-italic">{item.para}</p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default About;
