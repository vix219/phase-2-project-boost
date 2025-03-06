
##  Car Management App
- A React-based application that allows users to view, filter, and request cars. Users can browse available cars, apply filters by car type or fuel type, and request their dream car by submitting a form.

## Features

- View a list of cars with details like name, year, type, color, and fuel type.
Apply filters to view cars by type and fuel type.
Submit a request for a new car, which gets added to the car list.
Components

### App

- Main component that manages the state of available cars.
Fetches the car data from the API (http://localhost:5001/Cars).
Provides the car data and handleAddItem function to child components using Outlet.

### NavBar

- Displays navigation links to different sections of the app (Home, Car Filters, Request A Car).

### CarCard

- Displays individual car information including the name, image, year, color, type, and fuel type.
Includes a button for marking the car as a favorite (using a star emoji).

### CarFilters

- Provides a form to filter cars by type (SUV, Sedan) and fuel type (Electric, Hybrid, Gasoline, Diesel).
Displays a message if no cars match the filter criteria.

### CarList

- Maps over the cars data and renders a list of CarCard components.

### Home

- Displays the application logo and a list of cars rendered by the CarList component.

### NewCar

- A form to request a new car by providing the car’s name, type, color, year, and fuel type.
Submits the new car data to the server and updates the list of available cars.

# API

## Endpoints

GET /Cars - Retrieves the list of cars.
POST /Cars - Adds a new car (used by the "Request A Car" form).
Folder Structure

```txt
src/
├── components/
│   ├── CarCard.js         # Component to display individual car details
│   ├── CarFilters.js      # Component to filter cars
│   ├── CarList.js         # Component to render the list of cars
│   ├── Home.js            # Home page component
│   ├── NavBar.js          # Navigation bar component
│   └── NewCar.js          # Form to request a new car
├── App.js                 # Main App component
├── App.css                # Styles for the application
└── index.js               # Entry point for the React app 
```

## Dependencies
- React
- React Router
- useState, useEffect hooks from React
- License
- This project is licensed under the MIT License.
