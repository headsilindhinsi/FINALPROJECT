import React from "react";

const Icon_collection = () => {
  return (
    <div className="container">

      {/*  FIRST ROW */}
      <div className="row my-5" >
        {[
          {
            icon: "bi-house-door",
            title: "ELATED SETTINGS",
            desc: "Enjoy fully customizable options crafted to help you design your pages with ease and precision.",
          },
          {
            icon: "bi-laptop",
            title: "ICON COLLECTIONS",
            desc: "A refined library of modern icons tailored to elevate your brand’s visual identity.",
          },
          {
            icon: "bi-stars",
            title: "SIMPLE DEMO IMPORT",
            desc: "Import complete layouts in a single click and start building instantly — fast, smooth, effortless.",
          },
        ].map((item, index) => (
          <div className="col-lg-4 col-md-12 col-12 mb-4" style={{fontSize: "1.2rem",lineHeight: "1.9",color: "#6c6863ff",fontWeight: "400",  }} key={index}>
            <div className="d-flex gap-3 align-items-center">
              <i className={`bi ${item.icon} fs-1`}></i>
              <p className="mt-4 fs-6">{item.title}</p>
            </div>

            <p className="fs-5 text-pink ms-5">{item.desc}</p>
          </div>
        ))}
      </div>

      {/*  SECOND ROW */}
      <div className="row my-5">
        {[
          {
            icon: "bi-heart",
            title: "WELCOME TO ELATED",
            desc: "Step into a beautifully designed framework created to inspire creativity and premium experiences.",
          },
          {
            icon: "bi-folder-plus",
            title: "AMAZING LAYOUTS",
            desc: "Choose from a variety of elegant layouts carefully built for stylish and functional pages.",
          },
          {
            icon: "bi-key",
            title: "ELATED DESIGN",
            desc: "A timeless design aesthetic that blends minimalism with luxury for a stunning visual experience.",
          },
        ].map((item, index) => (
          <div className="col-lg-4 col-md-12 col-12 mb-4" style={{fontSize: "1.2rem",lineHeight: "1.9",color: "#6c6863ff",fontWeight: "400",  }}key={index}>
            <div className="d-flex gap-3 align-items-center">
              <i className={`bi ${item.icon} fs-1`}></i>
              <p className="mt-4 fs-6">{item.title}</p>
            </div>

            <p className="fs-5  ms-5">{item.desc}</p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Icon_collection;
