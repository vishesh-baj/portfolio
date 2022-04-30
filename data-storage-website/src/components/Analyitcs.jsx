import React from "react";
import Laptop from "../assets/laptop.jpg";
const Analyitcs = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYITCS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            Manage Data Analyitcs Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea,
            consequatur? Inventore, soluta. Inventore qui impedit ullam quasi
            architecto. Est vel asperiores minima fugiat hic impedit. Vitae
            error mollitia at vel?
          </p>
          <button className="bg-[#000300]  w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analyitcs;
