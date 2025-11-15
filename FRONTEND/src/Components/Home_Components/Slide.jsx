import React from "react";
import { New, welcome } from "../../assets/assets";

const Slide = () => {
  return (
    <section className="events-section py-5 text-center">
      <div className="container">
        
        <h2 className="section-title mb-5"> Light up your Home</h2>

        <div className="row justify-content-center">
          {New.map((value, index) => (
            <div className="col-md-4 mb-5" key={index}>
              <div className="event-card position-relative">
                <img src={value.img} alt={value.title} className="event-img"/>

                <div className="flower-overlay"></div>
              </div>

              <h3 className="event-title mt-4">{value.title}</h3>
              <p className="event-date">{value.date}</p>
              
            </div>
          ))}
        </div>
      </div>

      <div className="container image-containe my-3">
        <div className="row">
          <div className="col-12">
            <img src={welcome.img} className="img-fluid welcome-img" alt="welcome" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slide;
