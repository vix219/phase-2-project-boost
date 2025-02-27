import React from "react";

function NewCar(){
    return (
        <>
        <form  className="new-car-form">
            <label>
                Name
                <input type="text" name="text" />
             </label>
             <label>
                Type
                <input type="text" name="text" />
             </label>
             <label>
                Color
                <input type="text" name="text" />
             </label>
             <label>
                Year
                <input type="text" name="text" />
             </label>
             <label>
                FuelType
                <input type="text" name="text" />
             </label>
      
        <input type="submit" value="submit" />
        </form>
    </>
    )
}

export default NewCar;