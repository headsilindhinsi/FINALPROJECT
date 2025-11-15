import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { client } from "../../assets/assets";

import "swiper/css";

const SWIPERS = () => {
  return (
    <div className="container">
      <div className="row">
     <h3 className="text-center testimonial-quote-mark">Brands</h3>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          speed={1000}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
         
          {client.map((c, index) => (
            <SwiperSlide key={index}>
              <div className="col my-5 text-muted logo-wrapper p-5">
                
                
                <img
                  src={c.image}
                  className="img-fluid logo gray"
                  alt="logo"
                />

                
                <img
                  src={c.img}
                  className="img-fluid logo color"
                  alt="logo"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </div>
  );
};

export default SWIPERS;
