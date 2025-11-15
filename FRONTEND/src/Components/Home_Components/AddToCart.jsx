import React from "react";
import { BoxSection, BoxSection1, BoxSection2 } from "../../assets/assets";

const AddToCart = () => {
  return (
    <section className="home-decor-section" style={{   fontFamily: "'Playfair Display', serif",   color: "#3b332b",   backgroundColor: "#fff", }}>
      <div className="container py-5">
        <h2 className="text-center fw-bold mb-5" style={{   fontSize: "2.5rem",   color: "#bdada0ff",   letterSpacing: "0.5px", }}>  New Arrivals</h2>

        {/*  ROW 1 */}
        <div className="row align-items-center bg-light rounded-4 shadow-sm mb-4 p-4">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <p style={{   fontSize: "1.2rem",   lineHeight: "1.9",   color: "#8b857eff",   fontWeight: "400", }}>
              Timeless simplicity meets modern elegance. The Marble Essence Wall
              Clock brings a sense of calm and order to your space with its
              smooth stone texture and gold accents. Perfect for minimalist
              interiors that value quiet luxury and effortless style.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <div className="overflow-hidden rounded-4">
              <img src={BoxSection.img} alt="Decor candle" className="img-fluid rounded-4 shadow-sm elegant-img"/>
            </div>
          </div>
        </div>

        {/*  ROW 2 (beige background) */}
        <div className="row align-items-center rounded-4 shadow-sm mb-4 p-4" style={{ backgroundColor: "#f8f5f2" }}>
          <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <p style={{   fontSize: "1.2rem",   lineHeight: "1.9",   color: "#8b857eff",   fontWeight: "400", }}>
              Delicate yet striking, the Blush Harmony Vase Set combines soft
              neutral tones with glass accents to create a serene, inviting
              atmosphere. Whether filled with dried blooms or left empty as a
              sculptural piece, it adds a touch of modern grace to any table.
            </p>
          </div>
          <div className="col-lg-6 order-lg-1 text-center">
            <div className="overflow-hidden rounded-4">
              <img src={BoxSection1.img} alt="Decor mirror" className="img-fluid rounded-4 shadow-sm elegant-img"/>
            </div>
          </div>
        </div>

        {/*  ROW 3 */}
        <div className="row align-items-center bg-light rounded-4 shadow-sm p-4">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <p style={{   fontSize: "1.2rem",   lineHeight: "1.9",   color: "#8b857eff",   fontWeight: "400", }}>
              Bring nature’s elegance indoors with the Olive Noir Botanical Vase.
              Its deep, earthy tones and clean silhouette make it a statement of
              quiet sophistication. Pair it with dried leaves or a single stem
              for a refined, organic look.
            </p>
          </div>
          <div className="col-lg-6 text-center">
            <div className="overflow-hidden rounded-4">
              <img src={BoxSection2.img} alt="Decor breakfast" className="img-fluid rounded-4 shadow-sm elegant-img"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddToCart;
