import React from "react";

const Appwrapper = ({ children }) => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="mx-[5vw] w-[90vw] max-h-[60vh]  flex  gap-10 justify-center items-center p-5 overflow-y-scroll flex-wrap">
        {children}
      </div>
    </div>
  );
};
export default Appwrapper;
