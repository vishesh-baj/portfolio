import React from "react";

const AvatarPlaceholder = ({ initials }) => {
  return (
    <div className="avatar placeholder">
      <div className="bg-neutral-focus text-neutral-content rounded-full w-24">
        <span className="text-3xl text-teal-400">{initials}</span>
      </div>
    </div>
  );
};
export default AvatarPlaceholder;
