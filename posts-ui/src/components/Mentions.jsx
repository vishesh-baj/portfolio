import React, { useState } from "react";
import { Mention, MentionsInput } from "react-mentions";
import defaultMentionsStyles from "../styles/defaultMentionsStyles";
import defaultStyles from "../styles/defaultStyles";
const users = [
  { id: 1, display: "John" },
  { id: 2, display: "Jack" },
];
const Mentions = () => {
  return (
    <div>
      <MentionsInput
        placeholder="mention people using '@"
        // className=" w-[60vw] outline-none p-5"
        style={defaultStyles}
        value={textValue}
        onChange={handleChange}
        onKeyDown={(e) => handleKeyPress(e)}
      >
        <Mention
          style={defaultMentionsStyles}
          data={postsData}
          className="px-5"
        />
      </MentionsInput>
    </div>
  );
};
export default Mentions;
