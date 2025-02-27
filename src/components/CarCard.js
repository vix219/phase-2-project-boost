import React from "react";


function CarCard({car}){
   

    return(
        
            <li  className="card">
             <div>
                <img className="image" src={car.image} alt={"description"} />
                <ul>{car.name}</ul>
                <ul>{car.year}</ul>
                <ul>{car.type}</ul>
                <ul>{car.color}</ul>
                <ul>{car.fuel_type}</ul>
            </div>
            </li>
        )
     
    
}

export default CarCard