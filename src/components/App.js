import React, { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";


function App(){

const[cars, setCars]= useState([])

useEffect(() => {
    fetch("http://localhost:5001/Cars")
    .then((response) => response.json())
    .then((car)=>setCars(car))
},[])

    return (
        <>
        <header>
            <NavBar />
        </header>
        <Outlet context={cars}/>
       
        </>
    )
}

export default App;
