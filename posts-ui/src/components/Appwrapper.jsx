import React from "react";

const Appwrapper = ({ children }) => {
  return (
    <div className="w-full h-screen  flex justify-center">
      <div className="mx-[5vw] w-[90vw] h-screen  flex justify-center items-end p-5">
        {children}
      </div>
    </div>
  );
};

export default Appwrapper;
