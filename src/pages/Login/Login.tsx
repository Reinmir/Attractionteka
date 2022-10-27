import React from "react";

import { Link } from "react-router-dom";


import FormBuilder from "src/components/FormBuilder/FormBuilder";
import FormWrapper from "src/components/FormWrapper/FormWrapper";

import { LocalStorageKey } from "src/enums/localStorageEnum";
import { FormBuilderReturnType } from "src/interfaces/formbuilder-returnvalue";
import { UserInput } from "src/types/UserInput";

import config from "./config";

import "./style.scss";

const Login = () => {
  const handleSubmit = (items: FormBuilderReturnType[]) => {
    const authStorage = JSON.parse(
      localStorage.getItem(LocalStorageKey.authKey) || ""
    );
    const authInput = items.reduce((prev, curr) => {
      const key = curr.name as keyof UserInput;
      return (prev[key] = curr.value), prev;
    }, {} as UserInput);
    console.log(JSON.stringify(authStorage));
    console.log(JSON.stringify(authInput));
    if (JSON.stringify(authStorage) !== JSON.stringify(authInput) || authInput) {
      console.log("Error");
    } else {
      console.log("Successfuly!");
    }
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
