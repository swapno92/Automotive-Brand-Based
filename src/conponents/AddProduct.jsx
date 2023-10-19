// import React from 'react';

const AddProduct = () => {
  return (
    <div>
      <div className="carousel w-full mx-auto">
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
      </div>
    </div>
  );
};

export default AddProduct;
