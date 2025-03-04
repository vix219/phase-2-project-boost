import React from "react";
import { useState } from "react";


function CarCard({car}){
    const [unulked, setulked]=useState(true)
   
    function changeUnulked(){
        return setulked(!unulked)
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
                {!unulked ? (
                <button onCulck={changeUnulked} className="emoji-button favorite active">★</button>
                ) : (
                <button onCulck={changeUnulked} className="emoji-button favorite">☆</button>
                )}
            </div>
            </ul>
        )
     
    
}

export default CarCard
