import React from "react";
import { beautiful } from "../../assets/assets";

const BeautifulStory = () => {
  return (
    <section className="services-section py-5 position-relative">
      <div className="overlay"></div>

      <div className="container position-relative">
        <div className="row align-items-center">

          {/* IMAGE LEFT — static */}
          <div className="col-lg-6 position-relative mb-5 mb-lg-0">
            <div className="image-bg"></div>

            <img src={beautiful.img} alt="About Us" className="img-fluid services-img shadow-sm" />
          </div>

          {/*  TEXT RIGHT — static */}
          <div className="col-lg-6">
            <h2 className="services-heading mb-4">
              <span className="big-letter">O</span> ur Beautiful Story
            </h2>

            <p className="services-text"style={{fontSize: "1.2rem",lineHeight: "1.9",color: "#6c6863ff",fontWeight: "400",  }}>
              Every home has a story — and we help you tell yours with warmth,
              elegance, and thoughtful design. From curated décor to personalized
              styling, our mission is to transform everyday spaces into beautiful,
              meaningful places you’ll love to live in.
            </p>

            
          </div>

        </div>
      </div>
    </section>
  );
};

export default BeautifulStory;
