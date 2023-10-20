// import React from 'react';

const Slider = ({ sliders }) => {
    // console.log(sliders)
    // console.log(slider.slider_one)
  const { slider_one, slider_two, slider_three } = sliders;
  return (
    <div>
      {/* <div className=" w-[90%] mx-auto line"> */}
      <div className="carousel  w-full">
        <div id="slide1" className="carousel-item relative h-[350px] w-full ">
          <img src={slider_one} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative h-[350px] w-full  ">
          <img src={slider_two} className="w-full" />
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

        <div id="slide3" className="carousel-item relative h-[350px] w-full ">
          <img src={slider_three} className="w-full" />
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
      {/* </div> */}
    </div>
  );
};

export default Slider;
