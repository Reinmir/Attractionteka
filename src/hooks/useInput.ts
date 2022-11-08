import React, { useEffect, useState } from "react";

import ConfigProps from "src/interfaces/config-props";
import ValidationsProps from "src/interfaces/config-validations";
import InputConfigsProps from "src/types/InputConfigs";

import * as util from "src/util";

interface useInputProps {
  config: ConfigProps[];
  setInputValues?: Function;
}

export const useInput = ({ config, setInputValues }: useInputProps) => {
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
    validations: ValidationsProps[]
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

  const checkAndShowError = () => {
    const newItemProperties = itemProperties.map((item) => {
      if (item.validations) {
        item.validError = getError(item.value, item.validations);
      }
      return item;
    });
    setItemProperties(newItemProperties);
    return newItemProperties;
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newItemProperties = checkAndShowError();
    const res = newItemProperties.every((item) => item.validError === "");
    if (res) {
      setInputValues?.(
        itemProperties.map((item) => ({ name: item.name, value: item.value }))
      );
    }
  };
  return {
    itemProperties,
    setValue,
    handleSubmit,
    checkAndShowError,
  };
};
