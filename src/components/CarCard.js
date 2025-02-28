import React from "react";


function CarCard({car}){
   

    return(
        
            <li  className="car-card">
             <div>
                <img className="car-card img" src={car.image} alt={"description"} />
                <ul className="car-card h3">{car.name}</ul>
                <ul className="car-card p">{car.year}</ul>
                <ul className="car-card p">{car.type}</ul>
                <ul className="car-card p">{car.color}</ul>
                <ul className="car-card p">{car.fuel_type}</ul>
            </div>
            </li>
        )
     
    
}

export default CarCard