import React, { useEffect,useState } from "react";
import CarList from "./CarList";

function App(){

const[cars, setCars]= useState([])

useEffect(() => {
    fetch("http://localhost:5001/Cars")
    .then((response) => response.json())
    .then((car)=>setCars(car))
},[])

    return (
        <div className="app">
            <CarList cars={cars} />
        </div>
    )
}

export default App;
