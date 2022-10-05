import EnumIcons from "./enumIcons";

interface ConfigProps {
  name: string;
  placeholder: string;
  type: string;
  icon?: EnumIcons;
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
