import React, { useState, useMemo } from "react";
import Input from "../Input/Input";
import ConfigProps from "src/interfaces/config-props";
import "./style.scss";

import { invisibleIcon, visibleIcon } from "../Input/inputIcons";

const PasswordInput: React.FC<ConfigProps> = ({
  type,
  rightIcon,
  ...props
}) => {
  const [inputType, setInputType] = useState(type);

  const toggleRightIcon = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
    console.log('1')
  };

  const rightIconVisible = useMemo(() => {
    switch (inputType) {
      case "password":
        return visibleIcon;
      case "text":
        return invisibleIcon;
      default:
        return visibleIcon;
    }
  }, [inputType]);

  return (
    <>
      <Input
        toggleRightIcon={toggleRightIcon}
        rightIcon={rightIconVisible}
        {...props}
        type={inputType}
      />
    </>
  );
};

export default PasswordInput;
