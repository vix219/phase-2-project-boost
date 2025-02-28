import React, { useState, useEffect } from 'react';

const CarFilters = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [carType, setCarType] = useState('All');
  const [fuelType, setFuelType] = useState('All');
  const [message, setMessage] = useState('');

  // Fetch cars data from the server
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('http://localhost:5001/Cars');
        const data = await response.json();
        setCars(data.Cars);
        setFilteredCars(data.Cars);
      } catch (error) {
        console.error('Error fetching cars data:', error);
      }
    };

    fetchCars();
  }, []);

  // Filter cars based on the selected filters
  useEffect(() => {
    let filtered = cars;

    if (carType !== 'All') {
      filtered = filtered.filter(car => car.type === carType);
    }

    if (fuelType !== 'All') {
      filtered = filtered.filter(car => car.fuel_type === fuelType);
    }

    setFilteredCars(filtered);

    // Set the message if no cars are found
    if (filtered.length === 0) {
      setMessage('No cars of this criteria found');
    } else {
      setMessage('');
    }
  }, [carType, fuelType, cars]);

  return (
    <div>
      <h1>Car Filters</h1>

      {/* Filter by Car Type */}
      <label>
        Car Type:
        <select value={carType} onChange={(e) => setCarType(e.target.value)}>
          <option value="All">All</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
        </select>
      </label>

      {/* Filter by Fuel Type */}
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

      {/* Display filtered cars */}
      <div>
        {message && <p>{message}</p>}

        <div className="car-list">
          {filteredCars.map((car, index) => (
            <div key={index} className="car-card">
              <img src={car.image} alt={car.name} />
              <h3>{car.name}</h3>
              <p>Year: {car.year}</p>
              <p>Color: {car.color}</p>
              <p>Fuel Type: {car.fuel_type}</p>
              <p>Type: {car.type}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarFilters;
