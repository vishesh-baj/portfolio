import React from "react";
import Sidebar from "./Sidebar";
const Navbar = () => {
  return (
    <nav className="fixed flex w-full h-16 items-center bg-transparent justify-between z-20   ">
      <h1 className="ml-5 text-sm text-white font-semibold md:text-2xl">
        DISHA HELP LINE
      </h1>
      {/* Desktop View */}
      <ul className="hidden md:flex gap-5 mr-5 ">
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Contact</li>
        <li>Testimonials</li>
      </ul>
      {/* Mobile View */}
      <Sidebar />
    </nav>
  );
};

export default Navbar;
