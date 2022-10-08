import React from "react";

import ConfigProps from "src/interfaces/config-props";

import { confirmIcon, emailIcon, passwordIcon, userIcon } from "./inputIcons";

import "./style.scss";

interface InputProps extends ConfigProps {
  toggleRightIcon?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  leftIcon,
  rightIcon,
  toggleRightIcon,
}) => {
  const changeIcon = () => {
    switch (leftIcon) {
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
        {rightIcon && toggleRightIcon && (
          <button
            className="inputPassword__visible"
            onClick={toggleRightIcon}
          >
            {rightIcon}
          </button>
        )}
      </div>
    </>
  );
};

export default Input;
