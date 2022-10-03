import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "src/pages/Login/Login";
import Registration from "src/pages/Registration/Registration";

import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
