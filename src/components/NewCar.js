import React from "react";

function NewCar(){
    return (
        < >
        <div className="form-container">
        <form  className="form">
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
        </div>
    </>
    )
}

export default NewCar;
