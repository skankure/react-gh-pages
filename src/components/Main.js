import React from 'react';
import Image from "react-bootstrap/Image";
import Hero from './main/Hero';
import Profiles from './main/Profiles';
import About from './main/About';
import Consulting from './main/Consulting'

const Main = () => {
  return (
    <div className='main'>
      <Hero/>
      <Profiles/>
      <About/>
      <Consulting/>
    </div>
  )
}

export default Main;