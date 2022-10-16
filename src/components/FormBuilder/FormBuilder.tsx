import React, { useState, useEffect } from "react";

import ConfigProps from "src/interfaces/config-props";
import ValidationsProps from "src/interfaces/config-validations";
import InputConfigsProps from "src/types/InputConfigs";

import Button from "../Button/Button";
import Input from "../Input/Input";
import PasswordInput from "../PasswordInput/PasswordInput";

import * as util from "src/util";
import ErrorBlock from "../ErrorBlock/ErrorBlock";

interface FormBuilderProps {
  config: ConfigProps[];
  setInputValues?: Function;
  aboveLink?: React.ReactNode;
}

const FormBuilder: React.FC<FormBuilderProps> = ({
  config,
  setInputValues,
  aboveLink,
}) => {
  const [itemProperties, setItemProperties] = useState<InputConfigsProps[]>([]);

  useEffect(() => {
    const newItemProperties: InputConfigsProps[] = config.map(
      (formElement) => ({ ...formElement, value: "", validError: "" })
    );
    setItemProperties(newItemProperties);
  }, []);

  const setValue = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newItemProperties = [...itemProperties];
    newItemProperties[index].value = e.target.value;
    setItemProperties(newItemProperties);
  };

  const getError = (
    value: string,
    validations: ValidationsProps[] | undefined = [],
    index: number
  ) => {
    let res = "";
    for (const validation of validations) {
      switch (validation.validName) {
        case "minLength":
          if (util.checkMinLength(value, validation.validValue)) {
            res += `${validation.validValue} is minimal number of symbols`;
          }
          break;
        case "maxLength":
          if (util.checkMaxLength(value, validation.validValue)) {
            res += `${validation.validValue} is maximum number of symbols`;
          }
          break;
        case "isEmail":
          if (!util.checkEmail(value)) {
            res += `Incorrect email\n`;
          }
          break;
        case "isSame":
          const item = itemProperties
            .filter((item) => item.name === validation.validValue)
            .filter((valueNeed) => util.checkSameValue(value, valueNeed.value));
          if (item.length === 0) {
            res += `Not corresponds to ${validation.validValue}\n`;
          }
          break;
        default:
          return;
      }
    }
    return res;
  };

  const checkValidation = (index: number) => {
    const newItemProperties = [...itemProperties];
    if (newItemProperties[index].validations) {
      newItemProperties[index].validError = getError(
        newItemProperties[index].value,
        newItemProperties[index].validations,
        index
      );
    }
    setItemProperties(newItemProperties);
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setInputValues?.(itemProperties);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form__container" action="submit">
        {itemProperties.map((item, index) => {
          return (
            <>
              {item.type === "password" ? (
                <PasswordInput
                  {...item}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e, index)
                  }
                  onBlur={() => checkValidation(index)}
                  error={item.validError}
                />
              ) : (
                <Input
                  {...item}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setValue(e, index)
                  }
                  onBlur={() => checkValidation(index)}
                  error={item.validError}
                />
              )}
              {item.validError && <ErrorBlock>{item.validError}</ErrorBlock>}
              
            </>
          );
        })}
        {aboveLink}
        <Button disabled>Register</Button>
      </form>
    </>
  );
};

export default FormBuilder;
