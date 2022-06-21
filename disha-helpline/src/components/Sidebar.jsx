import { useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Sidebar toggles */}
      {!isOpen ? (
        <IoMenuOutline
          className="fixed right-5 top-5 md:hidden text-white"
          size={25}
          onClick={() => setIsOpen(!isOpen)}
        />
      ) : (
        <IoMdClose
          className="text-white fixed right-5 top-5 z-10 md:hidden"
          size={25}
          onClick={() => setIsOpen(!isOpen)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`top-0 right-0 fixed bg-black opacity-80 w-[50vw] h-full p-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300 md:hidden`}
      >
        <h1 className="text-2xl text-teal-400">
          {/* Navigation will come here */}
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id,
          explicabo.
        </h1>
      </div>
    </>
  );
};

export default Sidebar;
