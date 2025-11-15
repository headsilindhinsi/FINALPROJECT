import React from "react";

const Work = () => {
  return (
    <section className="overlap-section">
      <div className="container">

        <div className="row align-items-center justify-content-between">
          
          {/* LEFT TEXT */}
          <div className="col-12 col-md-3 text-center text-md-start mb-5 mb-md-0">
            <h2 className="couple-name">Max Wilson</h2>
            <p className="couple-text">
              A heart full of love and a soul full of hope,  
              I can't wait to begin this journey with you by my side.
            </p>
          </div>

          {/* CENTER IMAGES */}
          <div className="col-12 col-md-6 position-relative d-flex justify-content-center mb-5 mb-md-0">

            {/* LEFT IMAGE (TILTED) */}
            <div className="img-wrapper left-tilt">
              <img
                src="/images/groom1.jpg"
                className="tilted-img"
                alt="Groom"
              />
            </div>

            {/* RIGHT IMAGE (TILTED) */}
            <div className="img-wrapper right-tilt">
              <img
                src="/images/bride1.jpg"
                className="tilted-img"
                alt="Bride"
              />
            </div>

            {/* CENTER ICON */}
            <div className="center-icon">
              <img src="/images/love-icon.png" alt="Icon" />
            </div>

          </div>

          {/* RIGHT TEXT */}
          <div className="col-12 col-md-3 text-center text-md-start">
            <h2 className="couple-name">Amanda Jenny</h2>
            <p className="couple-text">
              Today, I marry my best friend. With joy in my heart  
              and love in my eyes, I’m ready for forever.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Work;
