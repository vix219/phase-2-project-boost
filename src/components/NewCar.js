
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
        <> <div  >
            <form className="form-container" onSubmit={handleSubmit}>
                  <h4 className="form-title" >Request Your Dream Car</h4>
                  <label className="label">
                     Name
                     <input className="textarea" onChange={(e) => setname(e.target.value)} value={name} type="text" name="text" />
                  </label>
                  <label className="label" >
                     Type
                     <input className="textarea" onChange={(e) => settype(e.target.value)} value={type}type="text" name="text" />
                  </label>
                  <label className="label" >
                     Color
                     <input className="textarea" onChange={(e) => setcolor(e.target.value)} value={color} type="text" name="text" />
                  </label>
                  <label className="label" >
                     Year
                     <input className="textarea" onChange={(e) => setyear(e.target.value)} value={year} type="text" name="text" />
                  </label>
                  <label className="label" >
                     FuelType
                     <input className="textarea" onChange={(e) => setfueltype(e.target.value)} value={feultype} type="text" name="text" />
                  </label>
            
            <input className="button" type="submit" value="submit" />
            </form>
        </div>
    </>
    )
}

export default NewCar;
