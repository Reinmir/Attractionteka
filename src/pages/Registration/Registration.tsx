import React from "react";

import { Link } from "react-router-dom";

import FormBuilder from "src/components/FormBuilder/FormBuilder";
import FormWrapper from "src/components/FormWrapper/FormWrapper";
import InputConfigsProps from "src/types/InputConfigs";

import config from "./config";

import "./style.scss";

const Registration = () => {
  
  const ababa = (item: InputConfigsProps[]) =>{
    
    console.log(item)
  }

  return (
    <>
      <FormWrapper
      
        title={"Welcome"}
        subtitle={"Create your Account"}
        text={"Please register to continue!"}
        
      >
        <FormBuilder  setInputValues={ababa} config={config} label={"Register"} />
        <p className="registration__link">
          Alredy have an account? <Link to="/login">Log in</Link>
        </p>
      </FormWrapper>
    </>
  );
};

export default Registration;
