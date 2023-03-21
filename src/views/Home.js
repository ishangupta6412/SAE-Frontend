import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Lastpart from '../components/sections/Lastpart';
import { Faculty } from '../components/sections/Faculty';
import { Crousel } from '../components/sections/Crousel';
import { Baja } from '../components/sections/Baja';
import { Team } from '../components/sections/Team';
import {Gallery} from '../components/Gallery/Gallery';
// import About from '../components/sections/About';
// import { Footer } from '../components/sections/Footer';





// import Cta from '../components/sections/Cta';

const Home = () => {

  return (
    <>
      {/* <Hero className="illustration-section-01" /> */}
      
      <Crousel/>
      {/* <About/> */}
      
      <Testimonial topDivider />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <FeaturesTiles />
       <Baja/>
        
      <Faculty/>
      <Team/>
      
    
  
      <Lastpart/>
    
    </>
  );
}

export default Home;