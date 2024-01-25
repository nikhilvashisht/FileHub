import React from "react";
import { useState } from "react";
import { loginv2 } from "../utils.js";

function Body() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function sendForm() {
    loginv2(username, password);
    setUsername("");
    setPassword("");
  }

  return (
    <div className="w-full h-screen bg-yellow-200 text-black">
      <h2 className="p-5 font-bold text-3xl space-mono block">NotesHub</h2>
      <div className="dm-sans justify-center content-center mt-6">
        <p className="text-5xl block m-auto w-1/2 text-center">
          Create, Edit and Manage all your <em>text files</em> in one place!
        </p>
        <div className="w-1/3 block m-auto mt-14 border-4 border-black rounded-xl content-center justify-center p-3">
          <input
            className="mt-3 p-3 w-full border-4 border-black rounded-xl bg-yellow-200 text-xl"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <input
            className="w-full p-3 mt-3 lock border-4 border-black rounded-xl bg-yellow-200 text-xl"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <button
            className="w-full p-3 mt-3 lock border-4 border-black rounded-xl bg-yellow-200 text-xl font-bold"
            onClick={sendForm}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Body;
