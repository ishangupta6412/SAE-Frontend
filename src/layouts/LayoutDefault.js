import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import './layouts.css'
// import { faculty } from '../components/sections/faculty';
//import Banner from '../components/layout/partials/Banner';

const LayoutDefault = ({ children }) => (
  <>
    <Header navPosition="right" className="reveal-from-bottom" />
    <main className="site-content  bg-dark">
      {children}
    </main>

    {/* <Banner /> */}
    
    <Footer />
  </>
);

export default LayoutDefault;  