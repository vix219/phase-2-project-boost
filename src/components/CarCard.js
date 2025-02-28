import React from "react";
import { useState } from "react";


function CarCard({car}){
    const [unliked, setliked]=useState(true)
   
    function changeUnliked(){
        return setliked(!unliked)
    }

    return(
        
            <li  className="card">
             <div>
                <img className="image" src={car.image} alt={"description"} />
                <ul>{car.name}</ul>
                <ul>{car.year}</ul>
                <ul>{car.type}</ul>
                <ul>{car.color}</ul>
                <ul>{car.fuel_type}</ul>
                {!unliked ? (
                <button onClick={changeUnliked} className="emoji-button favorite active">★</button>
                ) : (
                <button onClick={changeUnliked} className="emoji-button favorite">☆</button>
                )}
            </div>
            </li>
        )
     
    
}

export default CarCard