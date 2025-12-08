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
        <motion.div
          key={i}
          className={`carousel-slide ${i === currentIndex ? "active" : ""}`}
          initial="hidden"
          animate={i === currentIndex ? "visible" : "hidden"}
          variants={parallax(scrollY * 0.3)}
          style={{ backgroundImage: `url(${item.bg})` }}
        >

          {/* ⭐ TEXT CONTENT OVER SLIDE */}
          {i === currentIndex && (
            <motion.div 
              className="carousel-text"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="carousel-title">{item.title}</h1>
              <p className="carousel-subtitle">{item.subtitle}</p>

              {item.buttonText && (
                <button className="carousel-btn-main">
                  {item.buttonText}
                </button>
              )}
            </motion.div>
          )}

        </motion.div>
      ))}

      <button className="carousel-btn left" onClick={prevSlide}>&#10094;</button>
      <button className="carousel-btn right" onClick={nextSlide}>&#10095;</button>
    </section>
  );
};

export default Carousel;
