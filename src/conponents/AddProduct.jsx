// import React from 'react';
// import { AiOutlineStar } from "react-icons/ai";
// import {  useLoaderData } from "react-router-dom";

import { data } from "autoprefixer";

const AddProduct = () => {
  const handleAdded = (e) => {
    e.preventDefault();
    const form = e.target;
    const brand = form.brand.value;
    const name = form.name.value;
    const price = form.price.value;
    const ratting = form.ratting.value;
    const img = form.img.value;
    const description = form.description.value;
    // console.log(brand, name, price, ratting, img, description);
    const user = { brand, name, price, ratting, img, description };
    
    fetch("https://assignment-ten-server-obv1rxclj-swapno92.vercel.app/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert('complite')
      });
  };

  return (
    <>
      {/* carousel */}
      {/* <div className=" w-[90%] mx-auto line"> */}
      {/* <div className="carousel  w-full">
          <div
            id="slide1"
            className="carousel-item relative h-[350px] w-full "
          >
            <img src="/images/images.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div
            id="slide2"
            className="carousel-item relative h-[350px] w-full  "
          >
            <img src="/images/images.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                {" "}
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                {" "}
                ❯
              </a>
            </div>
          </div>

          <div
            id="slide3"
            className="carousel-item relative h-[350px] w-full "
          >
            <img src="/images/images.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div> */}
      {/* </div> */}

      {/* add to card */}
      <form onSubmit={handleAdded}>
        <div className="my-4  py-3 rounded-lg border border-purple-500">
          <h2 className="text-center text-3xl font-bold font-serif text-gray-600">
            Add Product
          </h2>
          <div className="grid md:grid-cols-2 grid-cols-1  md:px-16">
            <div className="space-y-1 mt-8 ">
              <h3 className="text-lg font-semibold ml-4">Brand Select...</h3>
              <input
                type="text"
                name="brand"
                className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                id=""
                placeholder="Brand"
                defaultValue={data.brand}
              />
            </div>
            <div className="space-y-1 mt-8">
              <h3 className="text-lg font-semibold ml-4">Name...</h3>
              <input
                className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                type="text"
                name="name"
                id=""
                placeholder="Name"
                defaultValue={data.name}
              />
            </div>
            <div className="space-y-1 mt-8">
              <h3 className="text-lg font-semibold ml-4">Price...</h3>
              <input
                className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                type="number"
                name="price"
                id=""
                placeholder="Price"
                defaultValue={data.price}
              />
            </div>
            <div className="space-y-1 mt-8">
              <h3 className="text-lg font-semibold ml-4">Ratting...</h3>
              <input
                className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                type="number"
                name="ratting"
                id=""
                placeholder="Ratting"
                defaultValue={data.ratting}
              />
            </div>
            <div className="space-y-1 mt-8">
              <h3 className="text-lg font-semibold ml-4">Image URL...</h3>
              <input
                className="input input-bordered md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                type="url"
                name="img"
                id=""
                placeholder="Image Url"
                defaultValue={data.img}
              />
            </div>
            <div className="space-y-1 mt-8">
              <h3 className="text-lg font-semibold ml-4">Description</h3>
              <textarea
                className="border border-gray-300 rounded-lg pt-8 md:w-[85%] w-[90%] pl-8 md:ml-0 ml-4"
                name="description"
                id=""
                // cols="lg:65"
                rows="4"
                placeholder="Short Description"
                defaultValue={data.description}
              ></textarea>
            </div>
          </div>
          <div className=" flex justify-center items-center mt-8">
            <button className=" bg-gray-700 text-white rounded-lg px-12 py-3">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddProduct;
