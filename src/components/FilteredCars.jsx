// import React, { useState, useEffect } from 'react';
// import { useOutletContext } from 'react-router-dom';

// const FilteredCarList = () => {
//   const cars = useOutletContext(); 

//   const [filteredCars, setFilteredCars] = useState(cars);

  
//   useEffect(() => {
//     let filtered = cars;

//     if (carType !== 'All') {
//       filtered = filtered.filter(car => car.type === carType);
//     }

//     if (fuelType !== 'All') {
//       filtered = filtered.filter(car => car.fuel_type === fuelType);
//     }

//     setFilteredCars(filtered);
//   }, [carType, fuelType, cars]);

//   return (
//     <div>
//       <h1>Filtered Cars</h1>
//       <div className="car-list">
//         {filteredCars.length === 0 ? (
//           <p>No cars found with the selected filters.</p>
//         ) : (
//           filteredCars.map((car, index) => (
//             <div key={index} className="car-card">
//               <img src={car.image} alt={car.name} />
//               <h3>{car.name}</h3>
//               <p>Year: {car.year}</p>
//               <p>Color: {car.color}</p>
//               <p>Fuel Type: {car.fuel_type}</p>
//               <p>Type: {car.type}</p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default FilteredCarList;
