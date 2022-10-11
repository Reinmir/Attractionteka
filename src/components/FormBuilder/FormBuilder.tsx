import React, { useState } from "react";
import ConfigProps from "src/interfaces/config-props";
import Input from "../Input/Input";
import PasswordInput from "../PasswordInput/PasswordInput";

interface FormBuilderProps {
  config: ConfigProps[];
}

const FormBuilder: React.FC<FormBuilderProps> = ({ config }) => {
  return (
    <>
      {config.map((item) => {
        return (
          <>
            {item.type === "password" ? (
              <PasswordInput {...item} />
            ) : (
              <Input {...item} />
            )}
          </>
        );
      })}
    </>
  );
};

export default FormBuilder;
