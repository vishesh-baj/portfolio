import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "../features/PostsSlice";
import Mentions from "rc-mentions";
import { IoIosAttach } from "react-icons/io";
import { BsEmojiSmile } from "react-icons/bs";
import { BiSticker } from "react-icons/bi";
import { AiOutlineGif, AiOutlineSend } from "react-icons/ai";
import { TbNotes } from "react-icons/tb";
import "./TextArea.css";
const TextArea = () => {
  const [textValue, setTextValue] = useState("");
  const postsData = useSelector((state) => state.posts);
  const dispatch = useDispatch();
  const { Option } = Mentions;

  const handleKeyPress = (e) => {
    if (e.shiftKey && e.key === "Enter") {
      e.preventDefault();
      setTextValue((prevState) => prevState.concat("\n"));
      console.log("SHIFT + ENTER event detected");
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      // * sent to store
      textValue.length > 0 &&
        dispatch(
          addPost({
            id: Math.random() + 1,
            display: "Sarah Linn",
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
      <div className="-mb-40 md:-mb-5">
        <Mentions
          placement="top"
          onChange={(e) => setTextValue(e)}
          onPressEnter={(e) => handleKeyPress(e)}
          value={textValue}
          placeholder={"press '@' to mention users"}
          rows={3}
          autoSize={{ minRows: 3, maxRows: 8 }}
          className="textarea textarea-primary"
        >
          {postsData.map((post) => (
            <Option
              className=" card w-[15vw] cursor-pointer ml-5 py-5 px-3 bg-[#423F01]  hover:bg-rose-500 hover:text-white outline-none text-[#FEEE02]"
              key={post.key}
              value={post.display.split(" ")[0]}
            >
              <span>{post.display.split(" ")[0]}</span>
            </Option>
          ))}
        </Mentions>
        <div className="absolute">
          <div className="btn-group">
            <button className="btn ">
              <BsEmojiSmile size="20" />
            </button>
            <button className="btn">
              <IoIosAttach size="20" />
            </button>
            <button className="btn ">
              <BiSticker size="20" />
            </button>
            <button className="btn ">
              <AiOutlineGif size="20" />
            </button>
            <button className="btn md:block hidden ">
              <TbNotes size="20" />
            </button>
            <button
              onClick={() => {
                textValue.length > 0 &&
                  dispatch(
                    addPost({
                      id: Math.random() + 1,
                      display: "Sarah Linn",
                      postContent: textValue,
                      timestamp: Date.now(),
                    })
                  );
              }}
              className="btn btn-circle btn-primary md:hidden ml-10 "
            >
              <AiOutlineSend size={22} color="white" />
            </button>
          </div>
        </div>

        <div className="absolute hidden md:block md:-right-20 bottom-0">
          <button
            onClick={() => {
              textValue.length > 0 &&
                dispatch(
                  addPost({
                    id: Math.random() + 1,
                    display: "Sarah Linn",
                    postContent: textValue,
                    timestamp: Date.now(),
                  })
                );
            }}
            className="btn btn-circle btn-primary hover:animate-ping "
          >
            <AiOutlineSend size={22} color="white" />
          </button>
        </div>
      </div>
    </>
  );
};
export default TextArea;
