import React, { useState } from "react";

import ConfigProps from "src/interfaces/config-props";

import { confirmIcon, emailIcon, passwordIcon, userIcon } from "./inputIcons";

import "./style.scss";

interface InputProps extends ConfigProps {
  toggleRightIcon?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  value?: string;
}

const Input: React.FC<InputProps> = ({
  name,
  placeholder,
  type,
  value,
  leftIcon,
  rightIcon,
  className,
  toggleRightIcon,
}) => {


  const useValidation = (value: string, validations: ConfigProps[]) =>{

  }


  const useInput = (intialValue: any) => {
    const [value, setValue] = useState(intialValue);
    const [isDirty, setDirty] = useState(false);
    const onChange = (e: any) => {
      setValue(e.target.value);
    };

    const onBlur = () => {
      setDirty(true);
    };
    return { value, onChange, onBlur };
  };

  const inputValue = useInput("");

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
          value={inputValue.value}
          onChange={inputValue.onChange}
          onBlur={inputValue.onBlur}
          type={type}
          name={name}
          placeholder={placeholder}
          className={`${className} input__customInput`}
        />
        {rightIcon && toggleRightIcon && (
          <button className="inputPassword__visible" onClick={toggleRightIcon}>
            {rightIcon}
          </button>
        )}
      </div>
    </>
  );
};

export default Input;
