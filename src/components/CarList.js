import React from "react";
import { useOutletContext } from "react-router-dom";

function CarList(){
    const cars = useOutletContext();
   
    return(
        <main>
            <ul className="cards">
        {cars.map((car) => {
            return(
            <li key={car.id} className="card">
             <div>
                <img className="image" src={car.image} alt={"description"} />
                <ul>{car.name}</ul>
                <ul>{car.year}</ul>
                <ul>{car.type}</ul>
                <ul>{car.color}</ul>
                <ul>{car.fuel_type}</ul>
            </div>
            </li>)
         })}
            </ul>
        </main>
    )
}

export default CarList