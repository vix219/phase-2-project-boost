import React from "react";

function NewCar(){
    return (
        < >
        <div className="form-container">
        <form  className="form">
            <label className="form-group label">
                Name  :  
                <input className="form-group input" type="text" name="text" />
             </label>
             <br></br>
             <label className="form-group label">
                Type  :
                <input className="form-group input" type="text" name="text" />
             </label>
             <br></br>
             <label className="form-group label">
                Color  :
                <input className="form-group input" type="text" name="text" />
             </label >
             <br></br>
             <label className="form-group label">
                Year  :
                <input className="form-group input" type="text" name="text" />
             </label>
             <br></br>
             <label className="form-group label">
                FuelType  :
                <input className="form-group input" type="text" name="text" />
             </label>
             <br></br>
        <input className="submit-btn" type="submit" value="submit" />
        </form>
        </div>
    </>
    )
}

export default NewCar;
