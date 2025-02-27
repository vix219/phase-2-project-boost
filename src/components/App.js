import React, { useEffect,useState } from "react";
import CarList from "./CarList";
import '../App.css';


function App(){

const[cars, setCars]= useState([])

useEffect(() => {
    fetch("")
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
