import React, { useContext } from "react";
import { MyContext } from "../../Context/ContextProvider";
import Navbar from "../Common_components/Navbar";
import { motion } from "framer-motion";
import { parallax } from "../../motion/Motion";

const Carousel = () => {
  const { slide, currentIndex, nextSlide, prevSlide, scrollY } =
    useContext(MyContext);

  return (
    <section id="home" className="carousel-container">

      <Navbar />

      {/* Background Slides */}
      {slide.map((item, i) => (
        <motion.div
          key={i}
          className={`carousel-slide ${i === currentIndex ? "active" : ""}`}
          initial="hidden"
          animate={i === currentIndex ? "visible" : "hidden"}
          variants={parallax(scrollY * 0.3)}
          style={{ backgroundImage: `url(${item.bg})` }}
        >
          {/* Soft Overlay */}
          <div className="carousel-overlay"></div>
        </motion.div>
      ))}

      {/* Elegant Text */}
      <div className="carousel-static-text elegant-text">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          Welcome to <span>AllForHome</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
        >
          Discover timeless elegance crafted for your dream home
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="carousel-main-btn elegant-btn"
        >
          Shop Now
        </motion.button>
      </div>

      {/* Navigation */}
      <button className="carousel-btn left" onClick={prevSlide}>
        &#10094;
      </button>

      <button className="carousel-btn right" onClick={nextSlide}>
        &#10095;
      </button>
    </section>
  );
};

export default Carousel;
