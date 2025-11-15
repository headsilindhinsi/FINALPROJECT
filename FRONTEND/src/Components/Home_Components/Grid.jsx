import React from "react";
import { Grids } from "../../assets/assets";

const Grid = () => {
  return (
    <>
      {/*  GRID SECTION */}
      <div className="grid-container container-fluid my-3">
        <div className="row g-3">
          {Grids.map((grid, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="grid-item">
                <img src={grid.img} alt="" className="img-fluid grid-image"/>

                {/*  Overlay text */}
                <div className="overlay-text">
                  <h5 className="title">{grid.title}</h5>
                  <p className="subtitle">{grid.sub}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Grid;
