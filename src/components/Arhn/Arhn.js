import React from 'react'
import './style.css'
import img from '../../assets/images/200w.gif'
import About from '../About_Arhn/About'
import Events from '../Events/Events'
import Team from '../Events/Team/Team'
import Gallery from '../Gallery/Gallery'
import BackgroundSlider from '../BackgroundSlider/BackgroundSlider'
import { Member } from '../Member/Member'


const Arhn = () => {
  return (
    <>
    <div className='arhn'>
  {/* 
     <section className='landingpage'>
        <img src={img} alt="" />

        <div className="heading">
            <h1 className="hdng">
                ARROHAN - TECH FEST NITD
            </h1>
        </div>
     </section> */}
     <BackgroundSlider />
  </div>
    
    <About />
   <Events />
   <Team />
   <Gallery />
   <Member />
    </>
  )
}

export default Arhn
