import { invisibleIcon, visibleIcon } from "src/components/Input/inputIcons";
import configProps from "src/interfaces/config-props";
import EnumIcons from "src/enums/enumIcons";

const config: configProps[] = [
  {
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    leftIcon: EnumIcons.emailIcon,
    validations: [
      {
        validName: "isEmail",
      },
    ],
  },
  {
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    leftIcon: EnumIcons.passwordIcon,
    rightIcon: visibleIcon || invisibleIcon,
    validations: [
      {
        validName: "minLength",
        validValue: 6,
      },
    ],
  },
];

export default config;
