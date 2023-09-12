<<<<<<< HEAD
import Login from "./components/pages/Login";
const App = () => {
  return (
    <div className="App">
      <Login />
=======
import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Outlet />
>>>>>>> aaed58ee93f4c027bbe37fc96bbd8e30a13589cc
    </div>
  );
};

export default App;
