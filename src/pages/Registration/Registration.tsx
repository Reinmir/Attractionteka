import React from "react";

import { Link, useNavigate } from "react-router-dom";

import FormBuilder from "src/components/FormBuilder/FormBuilder";
import FormWrapper from "src/components/FormWrapper/FormWrapper";
import { Layout } from "src/components/Layout/Layout";
import { PageRoutes } from "src/constants/routeNames";

import { LocalStorageKey } from "src/enums/localStorageEnum";

import { UseActions } from "src/hooks/useActions";
import { useAppSelector } from "src/hooks/useAppSelector";

import { FormBuilderReturnType } from "src/interfaces/formbuilder-returnvalue";
import { UserInput } from "src/types/UserInput";

import config from "./config";

import "./style.scss";

const Registration = () => {
  const navigate = useNavigate();
  const user = useAppSelector((state) => state.user);
  console.log(user);
  const { setUserData } = UseActions();
  const handleSubmit = (items: FormBuilderReturnType[]) => {
    const res = items
      .filter((item) => item.name === "email" || item.name === "password")
      .reduce((prev, curr) => {
        const key = curr.name as keyof UserInput;

        return (prev[key] = curr.value), prev;
      }, {} as UserInput);
    localStorage.setItem(LocalStorageKey.authKey, JSON.stringify(res));
    setUserData(res);
    navigate(PageRoutes.MainPage);
    console.log("store", user);
    console.log("res", res);
  };

  return (
    <>
      <Layout>
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
      </Layout>
    </>
  );
};

export default Registration;
