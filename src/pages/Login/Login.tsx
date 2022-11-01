import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import ErrorBlock from "src/components/ErrorBlock/ErrorBlock";

import FormBuilder from "src/components/FormBuilder/FormBuilder";
import FormWrapper from "src/components/FormWrapper/FormWrapper";

import { LocalStorageKey } from "src/enums/localStorageEnum";
import { FormBuilderReturnType } from "src/interfaces/formbuilder-returnvalue";
import { RootState } from "src/store";
import { UserInput } from "src/types/UserInput";

import config from "./config";

import "./style.scss";

const Login = () => {
  const state = useSelector((state: RootState) => state);
  console.log(state);

  const [isError, setIsError] = useState(false);

  const handleSubmit = (items: FormBuilderReturnType[]) => {
    const userLocalStorage = localStorage.getItem(LocalStorageKey.authKey);
    const authStorage = userLocalStorage ? JSON.parse(userLocalStorage) : null;
    const authInput = items.reduce((prev, curr) => {
      const key = curr.name as keyof UserInput;
      return (prev[key] = curr.value), prev;
    }, {} as UserInput);
    console.log(JSON.stringify(authStorage));
    console.log(JSON.stringify(authInput));
    if (
      !authStorage ||
      JSON.stringify(authStorage) !== JSON.stringify(authInput)
    ) {
      setIsError(true);
      console.log("Error");
    } else {
      setIsError(false);
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
          incorrect={
            isError && (
              <ErrorBlock className="login__error" iconClassName="login__error_icon">
                Incorrect email or password! Try again.
              </ErrorBlock>
            )
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
