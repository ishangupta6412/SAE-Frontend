import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesTiles from '../components/sections/FeaturesTiles';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Testimonial from '../components/sections/Testimonial';
import Lastpart from '../components/sections/Lastpart';
// import Cta from '../components/sections/Cta';
import Team from '../components/layout/team/Team';
import Time from '../components/layout/timeline/timeline';
const Home = () => {

  return (
    <>
      <Hero className="illustration-section-01" />
      <Testimonial topDivider />
      <FeaturesSplit invertMobile topDivider imageFill className="illustration-section-02" />
      <FeaturesTiles />
      <Lastpart/>
      <Team/>
      <Time/>
    </>
  );
}

export default Home;