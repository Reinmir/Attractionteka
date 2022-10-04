import React from "react";
import ConfigProps from "src/interfaces/config-props";
import Input from "../Input/Input";

interface FormBuilderProps {
  config: ConfigProps[];
}

const FormBuilder: React.FC<FormBuilderProps> = ({ config }) => {
  return (
    <>
      {config.map((item) => {
        return <Input {...item} />;
      })}
    </>
  );
};

export default FormBuilder;
