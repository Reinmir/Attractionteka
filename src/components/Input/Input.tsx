import React from "react";

import ConfigProps from "src/interfaces/config-props";

import { confirmIcon, emailIcon, passwordIcon, userIcon } from "./inputIcons";

import "./style.scss";

interface InputProps extends ConfigProps {}

const Input: React.FC<InputProps> = ({ name, placeholder, type, icon }) => {
  const changeIcon = () => {
    switch (icon) {
      case "emailIcon":
        return emailIcon;
      case "passwordIcon":
        return passwordIcon;
      case "userIcon":
        return userIcon;
      case "confirmIcon":
        return confirmIcon;
    }
  };

  return (
    <>
      <div className="input__container">
        <div className="input__icon">{changeIcon()}</div>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="input__customInput"
        />
      </div>
    </>
  );
};

export default Input;
