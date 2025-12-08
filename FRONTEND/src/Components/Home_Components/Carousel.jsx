import React, { useContext } from "react";
import { MyContext } from "../../Context/ContextProvider";
import Navbar from "../Common_components/Navbar";
import { motion } from "framer-motion";
import { parallax } from "../../motion/Motion";

const Carousel = () => {
  const { slide, currentIndex, nextSlide, prevSlide, scrollY } = useContext(MyContext);

  return (
    <section id="home" className="carousel-container">

      {/* Navbar */}
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
        ></motion.div>
      ))}

      {/* ⭐ Elegant Static Text */}
      <div className="carousel-static-text elegant-text">
        <h1>
          Welcome to <span>AllForHome</span>
        </h1>
        <p>Discover timeless elegance crafted for your dream home</p>

        <button className="carousel-main-btn elegant-btn">Shop Now</button>
      </div>

      {/* Navigation Arrows */}
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
