import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import '../App.css';  
import HomePage from "./HomePage";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5001/Cars")
      .then((response) => response.json())
      .then((car) => setCars(car));
  }, []);

  return (
    <div className="container">
      <HomePage />
      <nav className="nav-container">
        <NavBar />
      </nav>
      <Outlet context={cars} />
    </div>
  );
}

export default App;
