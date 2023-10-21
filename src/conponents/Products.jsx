// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";
import Product from "./Product";
// import ErrorPage from "./NoData";
import NoData from "./NoData";
import { useEffect, useState } from "react";
import Slider from "./Slider";

const Products = () => {
  const products = useLoaderData();
  //   console.log(brands);
  const [sliders, setSliders] = useState({});
  // console.log(sliders)

  const names = useParams();
  console.log(names);
  useEffect(() => {
    fetch(`https://assignment-ten-server-obv1rxclj-swapno92.vercel.app/brands/${names.name}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSliders(data);
      });
  }, []);

  return (
    <>
      {/* {sliders.map((slider) => (
        <Slider key={slider._id} slider={slider}></Slider>
      ))} */}
      <Slider sliders={sliders}></Slider>
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
    </>
  );
};

export default Products;
