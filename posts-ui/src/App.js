import React from "react";
import { useSelector } from "react-redux";
import Appwrapper from "./components/Appwrapper";
import Post from "./components/Post";
import TextArea from "./components/TextArea";
const App = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <Appwrapper>
      {posts.map((post) => (
        <Post
          id={post.id}
          username={post.userName}
          post={post.postContent}
          date={post.timestamp.getTime()}
        />
      ))}
      <TextArea />
    </Appwrapper>
  );
};
export default App;
