import React from "react";
import { useState, useEffect } from "react";
import { getNotes, openFile } from "../utils.js";

const Home = ({ username }) => {
  //notes are to in the form of {username, title, contents}
  const [notes, setNotes] = useState([
    { username: "username", title: "note-1", contents: "contents" },
  ]);

  //accessing the notes
  useEffect(() => {
    var response = getNotes("nikhil");
    response.then((res) => res.json()).then((result) => setNotes(result));
  }, [notes]);

  return (
    <div className="w-full h-screen">
      {/* Header */}
      <h1 className="font-bold text-5xl block p-10">Your notes</h1>

      {/* Notes panel */}
      <div className="w-full h-full flex px-10">
        {/* Notes */}
        {notes.map((note) => (
          <div className="bg-yellow-200 text-black font-bold text-xl w-40 h-40 border-4 border-black rounded-lg p-10 mx-10">
            {note["title"]}
          </div>
        ))}

        {/* Add button */}
        <button className="bg-yellow-200 border-4 border-black text-black font-bold text-xl h-40 w-40 rounded-lg px-16 mx-10">
          {/* Plus icon from supericons */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          {/* Plus icon end */}
        </button>
      </div>
    </div>
  );
};

export default Home;
