// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Brand from "./Product";

const Products = () => {
  const products = useLoaderData();
  //   console.log(brands);

  return (
    <div>
      <div className="bg-gray-100">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-8 gap-10 line ">
          {products.map((product) => (
            <Brand key={product._id} product={product}></Brand>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
