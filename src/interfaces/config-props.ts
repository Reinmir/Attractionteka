import EnumIcons from "./enumIcons";

interface ConfigProps {
  name: string;
  placeholder: string;
  type: string;
  leftIcon?: EnumIcons;
  rightIcon?: JSX.Element;

}

export default ConfigProps;
