// import React from 'react';

// import { AiOutlineStar } from "react-icons/ai";
import { useLoaderData } from "react-router-dom";
import Curt from "./Curt";
// import Curt from "./Curt";

const MyCart = () => {
  const curts = useLoaderData();
    // console.log(curts)
  //   const { img, brand, price, rating } = curt;
  return (
    <div>
         <div className="bg-gray-100">
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 p-8 gap-10 ">
      {
        curts.map(curt => <Curt key={curt._id} curt={curt}></Curt>)
      }
            </div>
         </div>
    </div>
  )
};

export default MyCart;
