import React from "react";
import CarCard from "./CarCard";

function CarList({cars}){

    return(
        <main>
            <ul classname="cards">
                {cars.map((car)=> <CarCard car={car}/>)}
            </ul>
        </main>
    )

}

export default CarList