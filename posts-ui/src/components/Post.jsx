import React from "react";
import AvatarPlaceholder from "./AvatarPlaceholder";
const Post = ({ username, post, date }) => {
  const usernameInitials = username
    .split(" ")
    .map((n) => n[0])
    .join("");
  const curDate = new Date(date);
  const dateStr = `${curDate.getDate()}/${curDate.getDay()}/${curDate.getFullYear()} | ${curDate.getHours()}:${curDate.getMinutes()}:${curDate.getSeconds()}`;
  return (
    <div className="card w-screen bg-neutral text-neutral-content">
      <div className="card-body">
        <div className="flex items-center gap-5">
          <AvatarPlaceholder initials={usernameInitials} />
          <div className="flex flex-col gap-1">
            <h2 className="text-primary font-bold">{username}</h2>
            <h1>{post}</h1>
            <p className="text-teal-500">{dateStr}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Post;
