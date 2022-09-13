import React from "react";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
import Task from "./Pages/Task";
import Signup from "./Pages/Signup";
import PrivateRoute from "./Pages/PrivateRoute";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/task"
          element={
            <PrivateRoute route="/">
              <Task />
            </PrivateRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
