import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./conponents/Root";
import Home from "./conponents/Home";
import AddProduct from "./conponents/AddProduct";
import MyCart from "./conponents/MyCart";
import Login from "./conponents/Login";
import Register from "./conponents/Register";
import AuthProvider from "./Providers/AuthProvider";
import ProductDetails from "./conponents/ProductDetails";
import Products from "./conponents/Products";
import Update from "./conponents/Update";
import ErrorPage from "./conponents/ErrorPage";
import PrivateRoute from "./conponents/PrivateRoute";
// import { GiTesla } from "react-icons/gi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("https://assignment-ten-server-virid.vercel.app/brands"),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () => fetch("https://assignment-ten-server-virid.vercel.app/curt"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/brands/:name",
        element: <Products></Products>,
        loader: ({ params }) =>
          fetch(`https://assignment-ten-server-virid.vercel.app/products/${params.name}`),
      },
      {
        path: "/product/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-ten-server-virid.vercel.app/products/details/${params.id}`),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://assignment-ten-server-virid.vercel.app/products/details/${params.id}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
