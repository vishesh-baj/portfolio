import React from "react";

const AvatarPlaceholder = ({ initials }) => {
  // ! not required unless data is persistant
  // const getRandomColor = (array) => {
  //   const randomElement = array[Math.floor(Math.random() * array.length)];
  //   return randomElement;
  // };
  // const colorArray = ["#FF7598", "#75D1F0", "#C07EEC"];
  return (
    <div className="avatar placeholder md:block hidden">
      <div className="bg-neutral-focus text-neutral-content rounded-full w-16">
        <span className={`text-xl text-[#75D1F0]`}>{initials}</span>
      </div>
    </div>
  );
};
export default AvatarPlaceholder;
