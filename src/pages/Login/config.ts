import { invisibleIcon, visibleIcon } from "src/components/Input/inputIcons";
import configProps from "src/interfaces/config-props";
import EnumIcons from "src/interfaces/enumIcons";

const config: configProps[] = [
  {
    name: "Email",
    placeholder: "Enter your email",
    type: "email",
    leftIcon: EnumIcons.emailIcon,
  },
  {
    name: "Password",
    placeholder: "Enter your password",
    type: "password",
    leftIcon: EnumIcons.passwordIcon,
    rightIcon: visibleIcon || invisibleIcon,
    validations: [
      {
        name: "maxLength",
        validValue: 20,
      },
      {
        name: "minLength",
        validValue: 2,
      },
    ],
  },
];

export default config;
