import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from "./card";
import Data from "./Teamdata";
const Team = () => {

  const datafun =(val)=>{

        return(
            <Card imgURL={val.img} NAME={val.Name} POST={val.Post} LinkedIn={val.socal}/>
        );
  }
    return (
        <>
            <Contaner>
            <span className="team"><h1>Faculty Advisor</h1></span> 
                <div className="main-1">
                    <div className="box-1">
                        <img src="" alt="..." />
                        <h1>name</h1>
                        <h2>Department of Mechanical Engineering</h2>
                    </div>
                    <div className="box-1">
                        <img src="" alt="..." />
                        <h1>name</h1>
                        <h2>Department of Mechanical Engineering</h2>
                    </div>
                    <div className="box-1">
                        <img src="" alt="..." />
                        <h1>name</h1>
                        <h2>Department of Electrical Engineering</h2>
                    </div>
                </div>
                <span className="team"><h1>Team</h1></span> 
                <div className="main-2">
                {
                 Data.map(datafun)
                }
                </div>
               
            </Contaner>
        </>
    );
};

const Contaner = styled.section`

     .team{
        text-align: center;
     }
     .main-1{
        display: flex;
        width: 87%;
        margin: auto;
        gap: 2rem;
     }
    .box-1{
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
        img{
            width: 100%;
            background: aquamarine;
            margin: auto;
            overflow: hidden;
            height: 231px;
            border-radius: 11px;
        }
     }
     .main-2{
        display: flex;
        width: 95%;
        margin: auto;
        overflow-x: scroll;    
        gap: 19px;
     }
     .main-2::-webkit-scrollbar{
        overflow: hidden;
     }

     @media only screen and (max-width: 1079px) {
        .main-1{
            display: flex;
            width: 96%;
            margin: auto;
            gap: 2rem;
         }
        .box-1{
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
            img{
                width: 100%;
                background: aquamarine;
                margin: auto;
                overflow: hidden;
                height: 231px;
                border-radius: 11px;
            }
      }
      @media only screen and (max-width: 893px) {
        .main-1{
            display: flex;
            width: 94%;
            margin: auto;
            gap: 1rem;
         }
        .box-1{
            width: 16rem;
            background: aqua;
            border-radius: 17px;
            
            h1{
                font-size: 30px;
                margin: -22px;
                text-align: center;
                padding: 0px;
            }
            h2{
                font-size: 15px;
                 text-align: center;
                 margin: 0px;
                 padding: 0px;
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

      @media only screen and (max-width: 750px) {
        .main-1{
            display: grid;
            grid-template-columns: 14rem 14rem;
            grid-template-rows: 16rem;
         }
        .box-1{
            width: 95%;
            background: aqua;
            border-radius: 17px;
            
            h1{
                font-size: 30px;
                margin: -22px;
                text-align: center;
                padding: 0px;
            }
            h2{
                font-size: 15px;
                 text-align: center;
                 margin: 0px;
                 padding: 0px;
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
      @media only screen and (max-width: 595px) {
        .main-1{
            display: grid;
            grid-template-columns: 48% 48%;
            grid-template-rows: 16rem;
         }
        .box-1{
            width: 97%;
            background: aqua;
            border-radius: 17px;
            
            h1{
                font-size: 30px;
                margin: -22px;
                text-align: center;
                padding: 0px;
            }
            h2{
                font-size: 15px;
                 text-align: center;
                 margin: 0px;
                 padding: 0px;
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
      @media only screen and (max-width: 360px) {
        .main-1{
            display: grid;
            grid-template-columns: 84%;
            grid-template-rows: 16rem;
            margin-left: 22px;
         }
        .box-1{
            width: 97%;
            background: aqua;
            border-radius: 17px;
            
            h1{
                font-size: 30px;
                margin: -22px;
                text-align: center;
                padding: 0px;
            }
            h2{
                font-size: 15px;
                 text-align: center;
                 margin: 0px;
                 padding: 0px;
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
`;
export default Team;