import React from "react";
import CarList from "./CarList";
import logo from "../images/logo.png"


const Home = () => {
  
  return (


    <div >
      <img className="logo" src={logo} ></img>
      {/* <p className="logo-decor">----------</p> 
      <h1 className="logo-text">BOOST MAX</h1>
      <p className="logo-decor">----------</p>
      <p className="logo-quote">
        "Find the car that fits your drive, not just your driveway."
      </p> */}
      

      <CarList/>
     
    </div>
  );
};

export default Home;