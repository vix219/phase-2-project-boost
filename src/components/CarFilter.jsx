import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const CarFilters = () => {
  const cars = useOutletContext(); 
  const [filteredCars, setFilteredCars] = useState(cars);
  const [carType, setCarType] = useState('All');
  const [fuelType, setFuelType] = useState('All');
  const [message, setMessage] = useState('');

  
  const filterCars = (e) => {
    e.preventDefault(); 

    let filtered = cars;

    if (carType !== 'All') {
      filtered = filtered.filter(car => car.type === carType);
    }

    if (fuelType !== 'All') {
      filtered = filtered.filter(car => car.fuel_type === fuelType);
    }

    setFilteredCars(filtered);

    if (filtered.length === 0) {
      setMessage('Our apologies, no cars of this criteria found');
    } else {
      setMessage('');
    }
  };

 
  useEffect(() => {
    filterCars({ preventDefault: () => {} }); 
  }, [carType, fuelType, cars]);

  return (
    <div className="body">
      <h1>Car Filter</h1>

      <form className="form" onSubmit={filterCars}>
        <label>
          Car Type:
          <select value={carType} onChange={(e) => setCarType(e.target.value)}>
            <option value="All">All</option>
            <option value="SUV">SUV</option>
            <option value="Sedan">Sedan</option>
          </select>
        </label>

        <label>
          Fuel Type:
          <select value={fuelType} onChange={(e) => setFuelType(e.target.value)}>
            <option value="All">All</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Gasoline">Gasoline</option>
            <option value="Diesel">Diesel</option>
          </select>
        </label>
        {/* <button className="submit-btn" type="submit">Apply Filter</button> */}
      </form>

      <div>
        {message && <p>{message}</p>}

        <div className="car-card">
          {filteredCars.map((car, index) => (
            <div key={index} className="car-card">
              <img className="car-card img" src={car.image} alt={car.name} />
              <h3 className="car-card h3" >{car.name}</h3>
              <p className="car-card p" >Year: {car.year}</p>
              <p className="car-card p" >Color: {car.color}</p>
              <p className="car-card p" >Fuel Type: {car.fuel_type}</p>
              <p className="car-card p" >Type: {car.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarFilters;
