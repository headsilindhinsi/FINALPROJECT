import React from "react";


const CoupleSection = () => {
  return (
    <section className="couple-section">
      <div className="container-fluid px-5 position-relative">

        {/* ===== TOP ROW ===== */}
        <div className="row g-3 align-items-center justify-content-center">

          {/* Left Couple Image */}
          <div className="col-lg-3 col-md-6">
            <img
              src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
              alt="Left Couple"
              className="img-fluid couple-img grayscale"
            />
          </div>

          {/* Groom Image */}
          <div className="col-lg-3 col-md-6 position-relative">
            <img
              src="https://images.unsplash.com/photo-1603052875514-815b6e6f6c3f"
              alt="Groom"
              className="img-fluid couple-img"
            />
          </div>

          {/* Text Section */}
          <div className="col-lg-3 col-md-6 text-section">
            <h3>Max Wilson</h3>
            <p>
              Today, I marry my best friend. With joy in my heart
              and love in my eyes, I’m ready for forever
            </p>
          </div>

          {/* Right Couple Image */}
          <div className="col-lg-3 col-md-6">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9"
              alt="Right Couple"
              className="img-fluid couple-img grayscale"
            />
          </div>
        </div>

        {/* ===== CENTER ICON ===== */}
        <div className="center-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            fill="currentColor"
            className="bi bi-heart-fill"
            viewBox="0 0 16 16"
          >
            <path
              fill="#b87f7b"
              d="M8 1C5.053 1 2.5 3.686 2.5 6.5c0 3.393 5.105 7.052 5.358 7.235a.5.5 0 0 0 .284.083.5.5 0 0 0 .284-.083C8.395 13.552 13.5 9.893 13.5 6.5 13.5 3.686 10.947 1 8 1z"
            />
          </svg>
        </div>

        {/* ===== BRIDE SECTION ===== */}
        <div className="row mt-5 justify-content-center text-center">
          <div className="col-md-3 col-sm-6">
            <img
              src="https://images.unsplash.com/photo-1591604466107-ec97de577aff"
              alt="Bride"
              className="img-fluid couple-img"
            />
            <h4 className="mt-4">Amanda Jenny</h4>
            <p className="bride-text">
              A heart full of love and a soul full of hope,
              I can’t wait to begin this journey
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoupleSection;
