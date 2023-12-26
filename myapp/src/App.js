import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/Register";
import Login from "./component/Login";
import Blogs from "./component/Blogs";
function App() {
  return (
<>
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/home" element={<Home/>}/>
      <Route exact path="/register" element={<Register/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/blogs" element={<Blogs/>}/>
    </Routes>
    </BrowserRouter>
</>
  );
}

export default App;
