import React from "react";
import { useState } from "react";


function CarCard({car}){
    const [unliked, setUnliked]=useState(true)
   
    function changeUnliked(){
        return setUnliked(!unliked)
    }

    return(
        
            <ul>
             <div className="car-card">
                <img className="car-card img" src={car.image} alt={"description"} />
                <ul className="car-card h3" >{car.name}</ul>
                <ul className="car-card p" >{car.year}</ul>
                <ul className="car-card p" >{car.type}</ul>
                <ul className="car-card p" >{car.color}</ul>
                <ul className="car-card p" >{car.fuel_type}</ul>
                {!unliked ? (
                <button onClick={changeUnliked} className="emoji-button favorite active">★</button>
                ) : (
                <button onClick={changeUnliked} className="emoji-button favorite">☆</button>
                )}
            </div>
            </ul>
        )
     
    
}

export default CarCard
