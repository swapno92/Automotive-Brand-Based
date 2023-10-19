// import React from 'react';
// import './Banner.css'

const BrandCard = ({ brand }) => {
  const { brand_img, brand_name } = brand;
  return (
    <>
      <div className="border border-slate-400 rounded-xl p-8 text-center flex flex-col justify-center items-center shadow-lg">
        <div className="">
          <img
            src={brand_img}
            className="w-60 rounded-md h-40"
            alt=""
          />
        </div>
        <h2 className="mt-4 font-serif text-3xl font-bold">{brand_name}</h2>
      </div>
    </>
  );
};

export default BrandCard;
