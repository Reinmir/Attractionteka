import React from "react";

import { Link } from "react-router-dom";

import FormBuilder from "src/components/FormBuilder/FormBuilder";
import FormWrapper from "src/components/FormWrapper/FormWrapper";
import { LocalStorageKey } from "src/enums/localStorageEnum";
import { FormBuilderReturnType } from "src/interfaces/formbuilder-returnvalue";

import config from "./config";

import "./style.scss";

export type Loli = {
  email: string;
  password: string;
};

const Registration = () => {
  const handleSubmit = (items: FormBuilderReturnType[]) => {
    const res = items
      .filter((item) => item.name === "email" || item.name === "password")
      .reduce((prev, curr) => {
        const key = curr.name as keyof Loli;

        return (prev[key] = curr.value), prev;
      }, {} as Loli);
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
