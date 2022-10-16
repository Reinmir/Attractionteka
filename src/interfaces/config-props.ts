import ValidationsProps from "./config-validations";
import EnumIcons from "./enumIcons";

interface ConfigProps {
  name: string;
  placeholder: string;
  type: string;
  leftIcon?: EnumIcons;
  rightIcon?: JSX.Element;
  validations?: ValidationsProps[];
}

export default ConfigProps;
