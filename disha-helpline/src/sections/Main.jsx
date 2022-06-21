import React from "react";
import { BiPlusMedical } from "react-icons/bi";
import { BsArrowDown } from "react-icons/bs";
const Main = () => {
  return (
    <main className="w-screen h-screen backdrop-blur-sm flex flex-col  ">
      <div className="w-full h-screen flex flex-col gap-5 justify-center items-center ">
        <BiPlusMedical className="text-red-600 text-7xl animate-pulse" />
        <h1 className="text-5xl text-center text-sky-300 ">Disha Help Line</h1>
        <h2 className="text-xl text-white">Mai Disha Hu</h2>
        <p className="text-center text-sm text-white italic">
          Provides no cost treatment to people in need
        </p>

        <div className="flex gap-5">
          <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md  cursor-pointer">
            Emergency
          </button>
          <button className="px-4 py-2 bg-sky-600 hover:bg-sky-700 text-white rounded-md  cursor-pointer">
            Know More
          </button>
        </div>
        <BsArrowDown className="animate-bounce text-3xl text-white absolute bottom-10  " />
      </div>
    </main>
  );
};

export default Main;
