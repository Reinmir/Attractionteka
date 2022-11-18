import React from "react";

import "./style.scss";

import FormWrapper from "src/components/FormWrapper/FormWrapper";
import { PageRoutes } from "src/constants/routeNames";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "src/components/PasswordInput/PasswordInput";
import Button from "src/components/Button/Button";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(PageRoutes.Registration);
  };
  return (
    <>
      <div className="forgotpw__container">
        <FormWrapper
          title="Forgot Password"
          text="Enter your email below to receive your password reset instructions"
        >
          <PasswordInput
            name="email"
            placeholder="Email"
            type="email"
          ></PasswordInput>
          <Button onClick={handleClick}>Send Password</Button>
          <Link className="forgotpw__toLogin" to={PageRoutes.Login}>
            I remember the password
          </Link>
        </FormWrapper>
      </div>
    </>
  );
};
export default ForgotPassword;
