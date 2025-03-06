# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


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
