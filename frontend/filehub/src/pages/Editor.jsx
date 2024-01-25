import React, { PureComponent } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { saveFile } from "../utils.js";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Editor = ({ username, filename, sample }) => {
  //file contents
  const [value, setValue] = useState(sample);
  //file name
  const [fnmae, setfname] = useState(filename);

  
  return (
    <div className="w-full h-screen">
      <ReactQuill theme="snow" value={value} onChange={setValue} />

      <Popup
        trigger={
          <button
            className="bg-black p-5 text-yellow-200 mx-10 rounded-lg absolute bottom-0 mb-5"
            onClick={() => {
              saveFile();
            }}
          >
            Save
          </button>
        }
        position="right center"
      >
        <input
          placeholder="Enter file name"
          className="bg-color-white"
          onChange={(e) => setfname(e.target.value)}
        ></input>
      </Popup>
    </div>
  );
};

export default Editor;
