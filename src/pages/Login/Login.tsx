import React from "react";

import { Link } from "react-router-dom";

import FormBuilder from "src/components/FormBuilder/FormBuilder";

import config from "./config";

import "./style.scss";

const Login = () => {
  return (
    <>
      <div className="login__wrapper">
        <h1 className="login__title">Welcome back</h1>
        <h2 className="login__subtitle">Please log in to continue!</h2>

        <FormBuilder
          aboveLink={
            <Link className="login__toForgot" to="/forgot_password">
              Forgot password?
            </Link>
          }
          config={config}
        />

        <p className="login__toRegistration">
          Don't have an account? <Link to="/registration">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default Login;
