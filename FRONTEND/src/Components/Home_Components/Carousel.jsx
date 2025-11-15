import React, { useContext } from "react";
import { MyContext } from "../../Context/ContextProvider";
import Navbar from "../Common_components/Navbar";
import { motion } from "framer-motion";
import { slowUp, parallax } from "../../motion/Motion";

const Carousel = () => {
  const { slide, currentIndex, nextSlide, prevSlide, scrollY } = useContext(MyContext);

  return (
    <section id="home" className="carousel-container">

      
      <Navbar />

      
      {slide.map((item, i) => (
        <motion.div key={i} className={`carousel-slide ${i === currentIndex ? "active" : ""}`} initial="hidden" animate={i === currentIndex ? "visible" : "hidden"} variants={parallax(scrollY * 0.3)} style={{ backgroundImage: `url(${item.bg})` }}></motion.div>
      ))}

    
      <button className="carousel-btn left" onClick={prevSlide}>
        &#10094;
      </button>

      {/*  Next Button */}
      <button className="carousel-btn right" onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
};

export default Carousel;
