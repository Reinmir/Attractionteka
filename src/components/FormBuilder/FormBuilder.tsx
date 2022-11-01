import React from "react";

import ConfigProps from "src/interfaces/config-props";

import Button from "../Button/Button";
import Input from "../Input/Input";
import PasswordInput from "../PasswordInput/PasswordInput";

import ErrorBlock from "../ErrorBlock/ErrorBlock";
import { useInput } from "src/hooks/useInput";

import "./style.scss";

interface FormBuilderProps {
  config: ConfigProps[];
  setInputValues?: Function;
  aboveLink?: React.ReactNode;
  label?: string;
  incorrect?: React.ReactNode;
  className?: string;
  classNameButton?: string;
}

const FormBuilder: React.FC<FormBuilderProps> = ({
  config,
  setInputValues,
  aboveLink,
  label,
  className,
  incorrect,
  classNameButton,
}) => {
  const { handleSubmit, itemProperties, setValue } = useInput({
    config,
    setInputValues,
  });

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`form__container ${className}`}
        action="submit"
      >
        {itemProperties.map((item, index) => {
          return (
            <>
              {item.type === "password" ? (
                <PasswordInput
                  {...item}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e, index)
                  }
                  error={item.validError}
                />
              ) : (
                <Input
                  {...item}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e, index)
                  }
                  error={item.validError}
                />
              )}
              {item.validError && <ErrorBlock>{item.validError}</ErrorBlock>}
            </>
          );
        })}
        {aboveLink}

        {incorrect}
        <Button className={classNameButton} type="submit">
          {label}
        </Button>
      </form>
    </>
  );
};

export default FormBuilder;
