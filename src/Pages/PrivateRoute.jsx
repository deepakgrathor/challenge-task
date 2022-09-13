import React, { Children } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children, route }) => {
  const token = localStorage.getItem("customToken");
  return token ? children : <Navigate to={route} />;
};

export default PrivateRoute;
