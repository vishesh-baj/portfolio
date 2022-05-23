import React, { useState } from "react";
import { Link } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false);
  return (
    <div className="w-full py-5 bg-cyan-600 container-full mx-auto px-10 ">
      <div className="flex justify-between">
        {/* LOGO */}
        <div className="text-3xl text-white">
          <Link to={PATHS.home}>LOGO</Link>
        </div>
        {/* List of Links */}

        <div className="flex flex-col md:hidden justify-center text-white">
          <AiOutlineMenu
            onClick={() => setIsToggled(!isToggled)}
            className="cursor-pointer"
            size={25}
          />
        </div>

        <ul
          className={`md:gap-5 text-white fixed md:static top-0 transform translate-x-[-100vw] md:translate-x-0 ${
            isToggled && "translate-x-[-11vw]"
          } h-screen md:h-auto w-[50vw] md:w-auto flex flex-col md:flex-row  gap-10 justify-center md:flex bg-teal-400 md:bg-transparent px-10 transition ease-in-out duration-200 `}
        >
          <GrClose
            onClick={() => setIsToggled(!isToggled)}
            className="absolute top-5 right-5 cursor-pointer md:hidden"
            size={20}
          />
          <li className="flex flex-col justify-center">
            <Link to={PATHS.home}>Home</Link>
          </li>
          <li className="flex flex-col justify-center">
            <Link to={PATHS.todo}>Todo</Link>
          </li>
          <li className="flex flex-col justify-center">
            <Link to={PATHS.notes}>Notes</Link>
          </li>
          <li className="flex flex-col justify-center">
            <Link to={PATHS.colorPallette}>Color Pallette</Link>
          </li>
          <li className="flex flex-col justify-center">
            <Link to={PATHS.pomodoro}>Pomodoro</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
