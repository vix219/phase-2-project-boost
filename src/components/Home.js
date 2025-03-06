import React from "react";
import CarList from "./CarList";
import logo from "../images/logo.png"


const Home = () => {
  
  return (
    <div >
      <img className="logo" src={logo} ></img>

      <CarList/>
     
    </div>
  );
};

export default Home;