import React from "react";
const Post = ({ username, post, date }) => {
  return (
    <div>
      <div className="card w-screen bg-neutral text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{username}</h2>
          <p>{post}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
export default Post;
