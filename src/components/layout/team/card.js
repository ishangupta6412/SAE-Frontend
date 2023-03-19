import React, { useState } from "react";
import styled from "styled-components";
const Card =(props)=>{


     return(
        <>
        <Contaner>
         
                <div className="box">
                   <img src={props.imgURL} alt="img...."/>
                   <h1>{props.NAME}</h1>
                   <h2>{props.POST}</h2>
                   <div className="socal">
                   <img src="/in.png"></img>
                   <a href={props.LinkedIn}>LinkedIn</a>
                   </div>
                </div>
        </Contaner>
        </>
     )
}

const Contaner = styled.section`


.box{
    width: 16rem;
    background: aqua;
    border-radius: 17px;
    h1{
        font-size: 30px;
        margin: -16px;
        text-align: center;
        padding: 0px;
    }
    h2{
        font-size: 15px;
         text-align: center;
         margin: 0px;
         padding: 0px;
    }
    .socal{
        display: flex;
        width: 18rem;
    margin-left: 32px;
    gap: 15px;

        a{
            margin: 0px;
         }
         img{
            width: 25px;
            height: 25px;
            margin: 0px;
        }
    }
    img{
        width: 100%;
        background: aquamarine;
        margin: auto;
        overflow: hidden;
        height: 231px;
        border-radius: 11px;
    }
 }
 @media only screen and (max-width: 1079px) {
  .box{
    width: 13rem;
  }
  }
 

`;
export default Card;