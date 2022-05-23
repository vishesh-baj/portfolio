import React from "react";
import { Link } from "react-router-dom";
const NavbarLink = ({ id, title, link, IsToggledProp, toggle }) => {
  return (
    <div className=" cursor-pointer hover:bg-white hover:text-teal-400 transition ease-in-out duration-400">
      <li className="flex w-[100%]  flex-col py-5 justify-center  ">
        <Link
          id={id}
          className="pl-10"
          onClick={() => IsToggledProp(!toggle)}
          to={link}
        >
          {title}
        </Link>
      </li>
    </div>
  );
};

export default NavbarLink;
