import React from "react";
import CarList from "./CarList";


const Home = () => {
  return (
    <div className="body">

              {/* <img src="public/images/boostLogo.jpg"
        alt="BOOST MAX Logo" /> */}

      <p className="logo-decor">----------</p> 
      <h1 className="logo-text">BOOST MAX</h1>
      <p className="logo-decor">----------</p>
      <p className="logo-quote">
        "Find the car that fits your drive, not just your driveway."
      </p>
      

      <CarList/>
     
    </div>
  );
};

export default Home;
