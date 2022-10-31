import React from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import ErrorBlock from "src/components/ErrorBlock/ErrorBlock";

import FormBuilder from "src/components/FormBuilder/FormBuilder";
import FormWrapper from "src/components/FormWrapper/FormWrapper";
import { LocalStorageKey } from "src/enums/localStorageEnum";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { FormBuilderReturnType } from "src/interfaces/formbuilder-returnvalue";
import { UserInput } from "src/types/UserInput";

import config from "./config";

import "./style.scss";

const dispatch = useAppDispatch();

const Registration = () => {
  const handleSubmit = (items: FormBuilderReturnType[]) => {
    const res = items
      .filter((item) => item.name === "email" || item.name === "password")
      .reduce((prev, curr) => {
        const key = curr.name as keyof UserInput;

        return (prev[key] = curr.value), prev;
      }, {} as UserInput);
    localStorage.setItem(LocalStorageKey.authKey, JSON.stringify(res));
    console.log(res);
  };

  return (
    <>
      <FormWrapper
        title={"Welcome"}
        subtitle={"Create your Account"}
        text={"Please register to continue!"}
      >
        <FormBuilder
          setInputValues={handleSubmit}
          config={config}
          label={"Register"}
        />
        <p className="registration__link">
          Alredy have an account? <Link to="/login">Log in</Link>
        </p>
      </FormWrapper>
    </>
  );
};

export default Registration;
