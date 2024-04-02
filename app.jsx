
import React from 'react';
import ReactDOM from 'react-dom/client';
import Homepage from './src/pages/homepage';
import ProductSearch from './src/pages/productSearch';
import Footer from './src/pages/homepage/components/footer';
import NavBar from './src/common/navbar';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

const parent = document.getElementById("root");
const root = ReactDOM.createRoot(parent);

const router = createBrowserRouter([
    {
      path: "/",
      element: <NavBar/>
    },
    {
        path: "/homepage",
        element:<Homepage/>
    },
    {
        path: "/productSearch",
        element:<Homepage/>
    }
  ]);

const App = () => {
    return  <RouterProvider router={router} />
};

root.render(<App />);