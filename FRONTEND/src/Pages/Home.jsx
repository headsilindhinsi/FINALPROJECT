import React from 'react'
import Navbar from '../Components/Common_components/Navbar'
import Story from '../Components/Home_Components/Story'
import Footer from '../Components/Common_components/Footer'
import Grid from '../Components/Home_Components/Grid'
import AddToCart from '../Components/Home_Components/AddToCart'
import About from '../Components/Home_Components/About'
import Team from '../Components/Home_Components/Team'
import SWIPERS from '../Components/Home_Components/Swiper'
import Icon_collection from '../Components/Home_Components/Icon_collection'
import Slide from '../Components/Home_Components/Slide'
import Group from '../Components/Home_Components/Group'
import Gallery from '../Components/Home_Components/Gallery'
import BeautifulStory from '../Components/Home_Components/BeautifullStory'
import AccessoriesSection from '../Components/Home_Components/Carousel'


const Home = () => {
  return (
    <>
      <Navbar />
      <AccessoriesSection />
      <Gallery />
      <About /> 
      <Story />
      <Grid />
      <BeautifulStory />
      <AddToCart />
      <Slide />
      <Icon_collection />
      <SWIPERS/>
      <Group />
      <Team />
      <Footer />
       
 </>
  )
}

export default Home