import React from "react";
import { two, Two2 } from "../../assets/assets";

const Story = () => {
  return (
    <section className="testimonial-section py-5 text-center position-relative">
      <div className="overlay"></div>

      <div className="container position-relative">
        <div className="row align-items-center justify-content-center">

          {/*  LEFT IMAGE — static */}
          <div className="col-8 col-sm-6 col-md-3 mb-4 mb-md-0">
            <div className="testimonial-image mx-auto">
              <img src={two.img} alt="wedding hands" className="img-fluid rounded-circle"/>
            </div>
          </div>

          {/*  CENTER CONTENT — static */}
          <div className="col-12 col-md-6">
            <h2 className="testimonial-quote-mark mb-3">Design With Us</h2>

            <p className="mb-4 px-2"style={{fontSize: "1.2rem",lineHeight: "1.9",color: "#67615aff",fontWeight: "400",  }}>
              “Designing our space with All4Home has been a truly refreshing experience.
              Their attention to detail, creativity, and ability to blend comfort with
              beauty gave us a home that feels warm, balanced, and uniquely ours.”
            </p>

           
          </div>

          {/*  RIGHT IMAGE — static */}
          <div className="col-8 col-sm-6 col-md-3 mt-4 mt-md-0">
            <div className="testimonial-image mx-auto">
              <img src={Two2.img} alt="wedding cake" className="img-fluid rounded-circle"/>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Story;
