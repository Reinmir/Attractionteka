import React from "react";

import { Link } from "react-router-dom";
import Button from "src/components/Button/Button";

import FormBuilder from "src/components/FormBuilder/FormBuilder";
import FormWrapper from "src/components/FormWrapper/FormWrapper";
import InputConfigsProps from "src/types/InputConfigs";

import config from "./config";

import "./style.scss";

const Login = () => {
  const handleSubmit = (item: InputConfigsProps[]) => {
    console.log(item);
  };

  return (
    <>
      <FormWrapper
        title={"Welcome Back!"}
        subtitle={"Please log in to continue!"}
      >
        <FormBuilder
          setInputValues={handleSubmit}
          className="login__form"
          classNameButton="login__button"
          aboveLink={
            <Link className="login__toForgot" to="/forgot_password">
              Forgot password?
            </Link>
          }
          config={config}
          label={"Login"}
        />

        <p className="login__toRegistration">
          Don't have an account? <Link to="/registration">Sign Up</Link>
        </p>
      </FormWrapper>
    </>
  );
};

export default Login;
