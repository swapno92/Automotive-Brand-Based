// import React from 'react';

import { AiOutlineStar } from "react-icons/ai";

const Curt = ({ curt }) => {
  const { img, brand, name, price, rating } = curt;
  console.log(curt);
  return (
    <div>
      <div className=" py-4 bg-white shadow-lg rounded-md line">
        <div className="flex justify-center items-center">
          <img src={img} alt="" className="w-[90%] h-60 rounded-lg" />
        </div>
        <h2 className="text-center text-2xl font-bold mt-4">
          {brand}
          <span className="font-medium"> &nbsp;{name}</span>
        </h2>
        <div className=" w-[90%] mx-auto flex justify-between px-3 items-center mt-4">
          <h2 className="text-2xl font-semibold">
            Price: $<span>{price}</span>
          </h2>
          <div className="flex items-center">
            <p className="font-semibold text-xl">{rating}&nbsp;</p>
            <AiOutlineStar className="text-xl"></AiOutlineStar>
          </div>
        </div>
        <div className="flex justify-center items-center mt-5">
          <button className=" mt-2 px-6 py-1 rounded font-semibold text-xl bg-red-100 border border-red-500">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Curt;
