import React from "react";
import {  Group_images1, Group_images2, Group_images3 } from "../../assets/assets";

const Team = () => {
  return (
    <section className="couple-container py-5">
      <div className="container">
        <div className="row align-items-center justify-content-center">

          {/*  LEFT COLUMN — static */}
          <div className="col-12 col-md-3 text-center mb-4">
            <img src={Group_images1.img} className="side-img"/>

            <h3 className="couple-name mt-4">Consultation Team</h3>

           
          </div>

          {/*  CENTER COLUMN — static */}
          <div className="col-12 col-md-6 text-center mb-4">
            <img src={Group_images2.img} alt="Couple" className="center-img" />
            <h3>Space Planning Team</h3>
          </div>

          {/*  RIGHT COLUMN — static */}
          <div className="col-12 col-md-3 text-center mb-4">
            <h3 className="couple-name mb-3"> Product Souring Team</h3>
             <img src={Group_images3.img} alt="Max Wilson" className="side-img mt-4" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Team;
