import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import './index.css';
import App from './components/App';
import CarList from "./components/CarList";
import NewCar from './components/NewCar'; 
import CarFilters from './components/CarFilters';


const router = createBrowserRouter([
  {
      path: "/",
      element: <App />,
      children: [
           {
              path: "/",
              element: <CarList />,             
          }, 
          {
              path: "/NewCar",
              element: <NewCar />
          }, 
          {
              path: "/CarFilters",
              element: <CarFilters />
          }
          
      ]
  }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

