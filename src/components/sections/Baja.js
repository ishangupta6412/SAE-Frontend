import React from "react";
import './Baja.css'

export const Baja = () => {
  return (
    <> 
     <div class="container-fluid">
       <h1 className="text-center bg-primary" id="Baja">Baja</h1>
      <div class="row featurette pb-4 ">
       
        <div class="col-md-7 pl-4">
          <h2 class="featurette-heading">
            First featurette heading.{" "}
            <span class="text-muted">It’ll blow your mind.</span>
          </h2>
          <p class="lead">
            Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id
            ligula porta felis euismod semper. Praesent commodo cursus magna,
            vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus
            commodo.
          </p>
        </div>
        <div class="col-md-5">
          <svg
            class="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="500"
            height="500"
            xmlns="https://cdn.pixabay.com/photo/2017/09/06/14/10/square-2721606_960_720.jpg"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
            role="img"
            aria-label="Placeholder: 500x500"
            borderradius="10px"
          >
            <title>Placeholder</title>
            <rect width="100%" height="100%" fill="#eee"></rect>
            <text x="50%" y="50%" fill="#aaa" dy=".3em">
              500x500
            </text>
          </svg>
        </div>
      </div>
      </div>
    </>
  );
};
