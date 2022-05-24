import React from "react";
import { Link } from "react-router-dom";

const NavbarLink = ({ id, title, link, IsToggledProp, toggle }) => {
  return (
    <div className=" cursor-pointer hover:bg-white md:hover:bg-transparent md:hover:text-teal-400 hover:text-teal-400 transition ease-in-out duration-400">
      <li
        onClick={() => IsToggledProp(!toggle)}
        className="flex w-[100%]  flex-col justify-center  "
      >
        <Link id={id} className="pl-10 py-5 md:text-center " to={link}>
          {title}
        </Link>
      </li>
    </div>
  );
};

export default NavbarLink;
