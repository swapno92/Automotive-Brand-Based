// import React from 'react';

import { GiAutoRepair, GiFlatTire } from "react-icons/gi";
import { RiOilLine } from "react-icons/ri";
import { BiSolidCarBattery } from "react-icons/bi";
import { MdPhoneCallback } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { TfiCup } from "react-icons/tfi";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import BrandCard from "./BrandCard";
// import { FaBeer } from 'react-icons/fa'

const Home = () => {
  const brands = useLoaderData();
  console.log(brands);

  function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  return (
    <div>
      <Banner></Banner>

      {/* brand */}
      <section className="bg-gray-100 my-6 py-12 space-y-4">
        <h2 className="text-center font-serif text-5xl font-bold">Our Brand</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-16 px-20">
          {brands.map((brand) => (
            <BrandCard key={brand._id} brand={brand}></BrandCard>
          ))}
        </div>
      </section>
      {/* services */}
      <section className=" bg-gray-50 py-8 px-6">
        <h2 className="text-center font-serif text-5xl font-bold">
          Our Services
        </h2>
        <div className=" mt-4 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">
          <div className=" px-10 py-12 space-y-4 shadow-xl bg-white rounded-lg">
            <GiAutoRepair className="text-8xl"></GiAutoRepair>
            <h3 className="text-2xl font-semibold">Auto repair</h3>
            <p className="text-xl">
              {" "}
              Auto repair services include routine tasks like oil changes, fluid
              checks, filter replacements. Regular maintenance helps prevent
              major issues and ensures optimal vehicle performance.
            </p>
          </div>
          <div className=" px-10 py-12 space-y-4 shadow-xl bg-white rounded-lg">
            <RiOilLine className="text-8xl"></RiOilLine>
            <h3 className="text-2xl font-semibold">Fluid replacement</h3>
            <p className="text-xl">
              Engine oil lubricates thes moving parts, reducing friction and
              preventing wear and tear. Regular oil changes are vital to keep
              the engine running smoothly and to prevent overheating and damage.
            </p>
          </div>
          <div className=" px-10 py-12 space-y-4 shadow-xl bg-white rounded-lg">
            <GiFlatTire className="text-8xl"></GiFlatTire>
            <h3 className="text-2xl font-semibold">Tire change</h3>
            <p className="text-xl">
              Changing a car tire is a crucial skill for drivers. In case of a
              flat, first, park in a safe spot, engage hazards, and apply the
              brake. Retrieve your spare tire, jack, and lug wrench. Loosen the
              lug nuts slightly.
            </p>
          </div>
          <div className=" px-10 py-12 space-y-4 shadow-xl bg-white rounded-lg">
            <BiSolidCarBattery className="text-8xl"></BiSolidCarBattery>
            <h3 className="text-2xl font-semibold">Battery replacement</h3>
            <p className="text-xl">
              Replacing a car battery is a straightforward process crucial for
              maintaining a vehicles performance. Begin by ensuring the car is
              in a safe location and wearing appropriate safety gear.
            </p>
          </div>
        </div>
      </section>
      {/* contacts */}
      <section className="mt-2 bg-gray-50 py-8 px-6">
        <h2 className="font-serif text-5xl font-bold ml-12">Contacts</h2>
        <div className=" mt-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          <div className=" px-10 py-12 space-y-4 rounded-lg">
            <MdPhoneCallback className="text-7xl bg-red-500 rounded-full p-2 text-white"></MdPhoneCallback>
            <h2 className="text-2xl font-semibold">+ 7 100 234 7892 34</h2>
            <p>
              Join Automotive as a CSR. Assist customers with inquiries, provide
              exceptional service, and ensure satisfaction. Strong communication
              skills and problem-solving abilities required. Competitive salary
              and opportunities for growth. Apply now to be part of our dynamic
              team.
            </p>
          </div>
          <div className=" px-10 py-12 space-y-4 rounded-lg">
            <ImLocation className="text-7xl bg-red-500 rounded-full p-2 text-white"></ImLocation>
            <h2 className="text-2xl font-semibold">
              685 Lane Drive St. California
            </h2>
            <p>
              Nestled in a serene neighborhood, 685 Lane Drive offers a prime
              location in the heart of St., California. Close to parks, schools,
              and shopping centers, it combines tranquility with convenience,
              making it an ideal choice for residents seeking a balanced
              lifestyle
            </p>
          </div>
          <div className=" px-10 py-12 space-y-4 rounded-lg">
            <TfiCup className="text-7xl bg-red-500 rounded-full p-2 text-white"></TfiCup>
            <h2 className="text-2xl font-semibold">info@quattro.com</h2>
            <p>
              Innovative Solutions Co. excels in delivering cutting-edge
              technology. Our expert team crafts tailored solutions, ensuring
              seamless integration and unmatched performance, empowering
              businesses for sustained success.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
