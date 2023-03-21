import React from 'react'
import './Faculty.css'


export const Faculty = () => {
  return (
    <>

<div className="container">
        <div className="center">
            <h1>Our Faculty Advisors</h1>
           
        </div>
        <div className="cards">

            <div className="card">
                <img src="https://nitdgp.ac.in/uploads/n_banerjee.jpg" alt="John Doe"/>
                <h3 className="card-name">Prof. N. Banarjee</h3>
                <p className="card-text">Department of Mechanical Engineering</p>
                {/* <a href="#" className="btn">About</a> */}
            </div>

            <div className="card">
                <img src="https://images.unsplash.com/photo-1529068755536-a5ade0dcb4e8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=801&q=80" alt="Avazov Temur"/>
                <h3 className="card-name">Prof. Apurba Layek</h3>
                <p className="card-text">Department of Mechanical Engineering</p>
                {/* <a href="#" className="btn">About</a> */}
            </div>

            <div className="card">
                <img src="https://nitdgp.ac.in/uploads/a8de5832739d616eafad090c7efce0b9.jpg"/>
                <h3 className="card-name danger"> Prof Tapas Kumar Saha</h3>
                <p className="card-text">Department of Electical Engineering</p>
                {/* <a href="#" className="btn">About</a> */}
            </div>


        </div>
    </div>
</>
  )
}
