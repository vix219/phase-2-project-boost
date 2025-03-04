import React from "react";
import {  useOutletContext } from "react-router-dom";
import CarCard from "./CarCard";


function CarList(){
    const {cars} = useOutletContext();
    const CarList = cars.map((car) => <CarCard key={car.id} car={car}/>);

   
    return(
        <main className="car-listing">
            {CarList}
        </main>
    )
}

export default CarList