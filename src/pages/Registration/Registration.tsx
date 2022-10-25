import React from "react";

import { Link } from "react-router-dom";

import FormBuilder from "src/components/FormBuilder/FormBuilder";
import FormWrapper from "src/components/FormWrapper/FormWrapper";
import { FormBuilderReturnType } from "src/interfaces/formbuilder-returnvalue";

import config from "./config";

import "./style.scss";

/*
{
  email: 'ioewhgowr@wfe.cwr',
  password: 'kldsfhuiewf'
}
*/

const Registration = () => {
  const handleSubmit = (items: FormBuilderReturnType[]) => {
    const key = "auth";
    const res = items.filter(
      (item) => item.name === "email" || item.name === "password"
    );

    localStorage.setItem(key, JSON.stringify(res));
    console.log(localStorage.getItem("auth"));
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
