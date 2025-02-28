import React, { useEffect,useState } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import '../App.css';  



function App(){

const[cars, setCars]= useState([])

useEffect(() => {
    fetch("http://localhost:5001/Cars")
    .then((response) => response.json())
    .then((car)=>setCars(car))

},[])


function handleAddItem(newItem){
    setCars(()=> [...cars, newItem])
}

    return (
    <div className="container">
        <nav className="nav-container">
            <NavBar />
        </nav>
        <Outlet context={{cars: cars, handleAddItem: handleAddItem}}/>
    </div>
       
    )
}
export default App;