import React from "react";
import { IoMenuOutline } from "react-icons/io5";
import { GrFormClose } from "react-icons/gr";
const Sidebar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <>
      {!isOpen ? (
        <IoMenuOutline
          className="fixed right-5 top-5 md:hidden"
          size={25}
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <GrFormClose
          className="fixed right-5 top-5 z-10 md:hidden"
          size={25}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}
      <div
        className={`top-0 right-0 fixed bg-teal-400 opacity-80 w-[50vw] h-full p-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300 md:hidden`}
      >
        <h1 className="text-2xl text-teal-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
          explicabo.
        </h1>
      </div>
    </>
  );
};

export default Sidebar;
