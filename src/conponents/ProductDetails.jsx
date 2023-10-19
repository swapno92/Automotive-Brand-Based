// import React from 'react';

import { Link, useLoaderData } from "react-router-dom";

const ProductDetails = () => {

    const product = useLoaderData()
    const {img, description} = product

    return (
      <div>
        <div className="rounded p-8 shadow-inner">
          <img
            src={img}
            alt=""
            className="lg:w-3/5 w-11/12 h-[60vh] mx-auto rounded-lg shadow-2xl my-6"
          />
          <p className=" font-semibold text-justify lg:w-3/5 mx-auto ">
            <span className="underline font-bold">Details:</span> {description}
          </p>
          <div className=" flex justify-center">
            <button className="text-center  px-4 py-1 rounded-lg btn-accent mt-4">
              <Link to="/">Add to Cart</Link>
            </button>
          </div>
        </div>
      </div>
    );
};

export default ProductDetails;