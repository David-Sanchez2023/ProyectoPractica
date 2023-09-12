import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";

const App = () => {
  const user = false;

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default App;
