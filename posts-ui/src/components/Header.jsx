import React, { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
const Header = () => {
  return (
    <header className="w-screen fixed h-[7vh]  flex justify-between items-center px-10">
      <div className="animate-bounce">
        <h1 className="font-bold text-primary">POSTS UI MOCKUP</h1>
        <p className="text-[10px]">Designed by @vishesh-baj</p>
      </div>
      <div className="flex gap-5">
        <a
          className="hover:animate-bounce"
          target={"_blank"}
          href="https://github.com/vishesh-baj"
        >
          <BsGithub className="cursor-pointer" size="20" />
        </a>
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/vishesh-bajpayee-18a600145/"
          className="hover:animate-bounce"
        >
          <BsLinkedin className="cursor-pointer" size={20} />
        </a>
      </div>
    </header>
  );
};

export default Header;
