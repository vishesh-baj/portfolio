import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const TextArea = () => {
  const [textValue, setTextValue] = useState("");

  const handleChange = (e) => {
    setTextValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.shiftKey && e.key === "Enter") {
      e.preventDefault();
      setTextValue((prevState) => prevState.concat("\n"));
      console.log("SHIFT + ENTER event detected");
    }
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      //   TODO: To be sent to store
      console.log("Pressed Enter, Value: ", textValue);
      setTextValue("");

      return false;
    }
  };

  return (
    <form onSubmit={(e) => console.log("Awesome")}>
      <TextareaAutosize
        minRows={3}
        maxRows={8}
        placeholder="Whats on your mind ?"
        className="textarea textarea-primary w-[60vw]"
        onChange={handleChange}
        onKeyDown={(e) => handleKeyPress(e)}
        value={textValue}
      />
    </form>
  );
};
export default TextArea;
