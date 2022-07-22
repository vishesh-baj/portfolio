import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../features/PostsSlice";
import Mentions from "rc-mentions";
import "./TextArea.css";
const TextArea = () => {
  const [textValue, setTextValue] = useState("");
  const { Option } = Mentions;

  const dispatch = useDispatch();
  const postsData = useSelector((state) => state.posts);

  const handleKeyPress = (e) => {
    if (e.shiftKey && e.key === "Enter") {
      e.preventDefault();
      setTextValue((prevState) => prevState.concat("\n"));
      console.log("SHIFT + ENTER event detected");
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      //   TODO: To be sent to store
      textValue.length > 0 &&
        dispatch(
          addPost({
            id: Math.random() + 1,
            display: "New User",
            postContent: textValue,
            timestamp: Date.now(),
          })
        );
      console.log("Pressed Enter, Value: ", textValue);

      setTextValue("");
      return false;
    }
  };

  return (
    <>
      <div className="pt-10">
        <Mentions
          placement="top"
          onChange={(e) => setTextValue(e)}
          onPressEnter={(e) => handleKeyPress(e)}
          value={textValue}
          placeholder={"press '@' to mention users"}
          rows={3}
          autoSize={{ minRows: 3, maxRows: 8 }}
        >
          {postsData.map((post) => (
            <Option key={post.key} value={post.display.split(" ")[0]}>
              {post.display.split(" ")[0]}
            </Option>
          ))}
        </Mentions>
      </div>
    </>
  );
};
export default TextArea;
