import React from "react";

import { Link } from "react-router-dom";

import FormBuilder from "src/components/FormBuilder/FormBuilder";
import FormWrapper from "src/components/FormWrapper/FormWrapper";

import config from "./config";

import "./style.scss";

const Registration = () => {
  return (
    <>
      <FormWrapper
        title={"Welcome"}
        subtitle={"Create your Account"}
        text={"Please register to continue!"}
      >
        <FormBuilder config={config} label={"Register"} />
        <p>
          Alredy have an account? <Link to="/login">Log in</Link>
        </p>
      </FormWrapper>
    </>
  );
};

export default Registration;
