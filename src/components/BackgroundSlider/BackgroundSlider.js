import React, { useEffect, useState } from 'react'
import './style.css'
import imageSlider from '../../data'

const BackgroundSlider = () => {
    const [currentState, setCurrentState] = useState(0)
    
    useEffect(()=>
    {
        const timer = setTimeout(()=>
        {
            if(currentState===2)
            {
                setCurrentState(0)
            }
            else{
                setCurrentState(currentState + 1)
            }
        }, 5000)
        return ()=>
        {
            clearTimeout(timer)
        }
    }, [currentState])

    const bgImageStyle = {
        backgroundImage: `url(${imageSlider[currentState].url})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        height:'100%'
    }

        const goToNext = (currentState)=>
        {
            setCurrentState(currentState)
        }

   
  return (
    <>
    <div className='contain-style'>
      <div style={bgImageStyle} ></div>
      <div className="transparent-background"></div>
    </div>

    <div className="carousel-boult">
        {
            imageSlider.map((imageSlider, currentState)=>(
            
                <span key={currentState} onClick={()=> goToNext(currentState)
                }></span>
            ))
        }
    </div>
    </>
  )
}

export default BackgroundSlider



