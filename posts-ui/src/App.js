import React from "react";
import { useSelector } from "react-redux";
import Appwrapper from "./components/Appwrapper";
import Header from "./components/Header";
import Post from "./components/Post";
import TextArea from "./components/TextArea";
const App = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      <Header />
      <Appwrapper>
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            username={post.display}
            post={post.postContent}
            date={post.timestamp}
          />
        ))}
      </Appwrapper>
      <div className="flex justify-center">
        <div className="absolute bottom-10">
          <TextArea />
        </div>
      </div>
    </div>
  );
};
export default App;
