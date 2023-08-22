import './App.css';
import './index.css'
import React from 'react';
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';



const router = createBrowserRouter([
  {
    path: "/",
    Component: Home, 
  },
  {
    path: '/login',
    Component: Login
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
