import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PATHS } from "../../routes/paths";
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { sidebarLinksBuilder } from "../../helpers/objects";
import NavbarLink from "../NavbarLink";
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
          } h-screen md:h-auto w-[50vw] md:w-auto flex flex-col md:flex-row justify-center md:flex bg-teal-400 md:bg-transparent  transition ease-in-out duration-200`}
        >
          <GrClose
            onClick={() => setIsToggled(!isToggled)}
            className="absolute top-5 right-5 cursor-pointer md:hidden"
            size={20}
          />

          {sidebarLinksBuilder.map((menuItem) => (
            <NavbarLink
              IsToggledProp={setIsToggled}
              title={menuItem.name}
              link={menuItem.link}
              toggle={isToggled}
              id={menuItem.id}
              key={menuItem.id}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
