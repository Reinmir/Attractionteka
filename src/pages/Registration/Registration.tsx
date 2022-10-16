import React from "react";

import { Link } from "react-router-dom";

import FormBuilder from "src/components/FormBuilder/FormBuilder";

import config from "./config";

import "./style.scss";

const Registration = () => {
  return (
    <>
      <div className="registration__wrapper">
        <h1 className="registration__title">Welcome</h1>
        <h2 className="registration__subtitle">Create your account</h2>
        <h3 className="registration__text">Please register to continue!</h3>
        <FormBuilder config={config} />
        <p>
          Alredy have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </>
  );
};

export default Registration;
