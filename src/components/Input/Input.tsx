import React, { useState } from "react";

import ConfigProps from "src/interfaces/config-props";

import {
  confirmIcon,
  emailIcon,
  passwordIcon,
  userIcon,
  visibleIcon,
} from "./inputIcons";

import "./style.scss";

interface InputProps extends ConfigProps {}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  leftIcon,
  rightIcon,
}) => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    
  };

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

  const iconVisible = () => {
    switch (rightIcon) {
      case "visibleIcon":
        return visibleIcon;
    }
  };

  return (
    <>
      <div className="input__container">
        <div className="input__icon">{changeIcon()}</div>
        <div className="input__visible" onClick={toggleVisible}>{iconVisible()}</div>
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
