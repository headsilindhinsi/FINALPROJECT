import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Navbar from "../Components/Common_components/Navbar";
import Footer from "../Components/Common_components/Footer";
import Team from "../Components/Home_Components/Team";
import SWIPERS from "../Components/Home_Components/Swiper";
import Hero from "../Components/About_Components/Hero";
import Gallery from "../Components/Home_Components/Gallery";



const About = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Gallery />
      <Team />
      <SWIPERS/>
      <Footer />
    </>
  );
};

export default About;
