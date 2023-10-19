// import React from 'react';

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

    console.log(brand, brand, name, price, ratting, img, description);
  };

  return (
    <div className="">
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

      {/* carousel */}
      {/* <div className="carousel w-full mx-auto">
        <div
          id="slide1"
          className="carousel-item relative h-[350px] w-full line mx-auto mx-12 "
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
          className="carousel-item relative h-[350px] w-full line mx-auto mx-12 "
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
          className="carousel-item relative h-[350px] w-full line mx-auto mx-12 "
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
    </div>
  );
};

export default AddProduct;
