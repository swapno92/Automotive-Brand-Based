import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './conponents/Root';
import Home from './conponents/Home';
import AddProduct from './conponents/AddProduct';
import MyCart from './conponents/MyCart';
// import Login from './conponents/Login';
// import Register from './conponents/Register';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/addProduct',
        element: <AddProduct></AddProduct>
      },
      {
        path: '/myCart',
        element: <MyCart></MyCart>
      },
      // {
      //   path: '/login',
      //   element: <Login></Login>
      // },
      // {
      //   path: '/register',
      //   element: <Register></Register>
      // }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
