import React from "react";

import ConfigProps from "src/interfaces/config-props";
import "./style.scss";

interface InputProps extends ConfigProps {}

const Input: React.FC<InputProps> = ({ name, placeholder, type }) => {
  return (
    <>
      <input type={type} name={name} placeholder={placeholder} className="customInput" />
    </>
  );
};

export default Input;
