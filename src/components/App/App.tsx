import React, { useState } from "react";

import { Route, Routes } from "react-router-dom";

import Login from "src/pages/Login/Login";
import MainPage from "src/pages/MainPage/MainPage";
import Registration from "src/pages/Registration/Registration";

import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/main-page" element={<MainPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
