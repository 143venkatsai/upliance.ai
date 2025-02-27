import React, { useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";

const RichTextEditor = () => {
  const [text, setText] = useState(JSON.parse(localStorage.getItem("content")));

  const handleChange = (content) => {
    setText(content);
    localStorage.setItem("content", JSON.stringify(content));
  };

  return (
    <div>
      <ReactQuill
        value={text}
        onChange={handleChange}
        className="overflow-auto mx-h-40"
      />
    </div>
  );
};

export default RichTextEditor;
