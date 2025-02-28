
import React, { useState } from "react";
import {  useOutletContext } from "react-router-dom";

function NewCar(){

   const {handleAddItem} = useOutletContext();

   
   
   const[name, setname]=useState("")
   const[type, settype]=useState("")
   const[color, setcolor]=useState("")
   const[year, setyear]=useState("")
   const[feultype, setfueltype]=useState("")

   function handleSubmit(e){
      e.preventDefault();
      const carData = {
       year: year,
       color: color,
       name: name,
       fuel_type: feultype,
       type: type,
       image: ""
      };

      fetch("http://localhost:5001/Cars", {
         method: "POST",
         headers: {
         "Content-Type": "application/json",
         },
         body: JSON.stringify(carData),
       })
      .then((r) => r.json())
      .then((newItem) => {
         handleAddItem(newItem); 
         setname("");
         settype("");
         setcolor("");
         setyear("");
         setfueltype("");
   });
   }
   
   
   return (
        <>
        <form onSubmit={handleSubmit} className="new-car-form">
            <label>
                Name
                <input onChange={(e) => setname(e.target.value)} value={name} type="text" name="text" />
             </label>
             <label>
                Type
                <input onChange={(e) => settype(e.target.value)} value={type}type="text" name="text" />
             </label>
             <label>
                Color
                <input onChange={(e) => setcolor(e.target.value)} value={color} type="text" name="text" />
             </label>
             <label>
                Year
                <input onChange={(e) => setyear(e.target.value)} value={year} type="text" name="text" />
             </label>
             <label>
                FuelType
                <input onChange={(e) => setfueltype(e.target.value)} value={feultype} type="text" name="text" />
             </label>
      
        <input type="submit" value="submit" />
        </form>
    </>
    )
}

export default NewCar;
