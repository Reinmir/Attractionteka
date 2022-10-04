import React from "react";

import { Link } from "react-router-dom";
import Button from "src/components/Button/Button";
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
        <form action="" className="form__container">
          <FormBuilder config={config} />
          <Button>Register</Button>
        </form>
        <p>
          Alredy have an account? <Link to="/login">Log in</Link>
        </p>
      </div>
    </>
  );
};

export default Registration;
