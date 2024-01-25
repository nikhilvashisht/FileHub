import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Home from "./pages/Home.jsx";
import Editor from './pages/Editor.jsx';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route element={<Login />} path="" />
        <Route element={<Home />} path="home/" />
        <Route element={<Editor />} path="editor/" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
