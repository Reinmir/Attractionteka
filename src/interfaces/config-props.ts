import EnumIcons from "./enumIcons";

interface ConfigProps {
  name: string;
  placeholder: string;
  type: string;
  leftIcon?: EnumIcons;
  rightIcon?: JSX.Element;
  validations?: [
    {
      name: string;
      validValue: number;
    },
    {
      name: string;
      validValue: number;
    }
  ];
}

export default ConfigProps;
