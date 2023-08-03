import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";
import Users from "./Users";
import Error from "./Error";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/users" element={<Users />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
