// import React from 'react';

// import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";

const ProductDetails = () => {
  const product = useLoaderData();
  console.log(product);
  const { img, description, type, rating, price, name, brand } = product;
  const newProduct = { img, description, type, rating, price, name, brand };

  // useEffect(() => {
  const handleCurt = () => {
    fetch("https://assignment-ten-server-virid.vercel.app/curt", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        swal({
          title: "Success!",
          text: "Product Added in My Cart",
        });
      });
  };
  // }, []);

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
        <p className=" font-semibold text-justify lg:w-3/5 mx-auto mt-4">
          <span className="underline font-bold">Type:</span> {type}
        </p>
        <div className=" flex justify-center">
          <button
            onClick={handleCurt}
            className="text-center  px-4 py-1 rounded-lg btn-accent mt-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
