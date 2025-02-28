import React from "react";
import { useOutletContext } from "react-router-dom";

function CarList(){
    const cars = useOutletContext();
   

// add filter to CarList
const carFilter = cars.filter(() => {

})

    return(
        <main>
            <ul className="car-listing">
        {cars.map((car) => {
            return(
            <li key={car.id} className="car-card">
             <div>
                <img className="car-card img" src={car.image} alt={"description"} />
                <ul className="car-card h3">{car.name}</ul>
                <ul className="car-card p">{car.year}</ul>
                <ul className="car-card p">{car.type}</ul>
                <ul className="car-card p">{car.color}</ul>
                <ul className="car-card p">{car.fuel_type}</ul>
            </div>
            </li>)
         })}
            </ul>
        </main>
    )
}

export default CarList

