// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Product from "./Product";
// import ErrorPage from "./NoData";
import NoData from "./NoData";

const Products = () => {
  const products = useLoaderData();
  //   console.log(brands);

  return (
    <div>
      <div className="bg-gray-100">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-8 gap-10 ">
          {products.length == 0 ? (
            <div className=" w-full col-span-3">
              <NoData></NoData>
              </div>
          ) : (
            products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
