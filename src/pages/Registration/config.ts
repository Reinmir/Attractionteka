import configProps from "src/interfaces/config-props";
import EnumIcons from "src/interfaces/enumIcons";

const config: configProps[] = [
  {
    name: "name",
    placeholder: "Enter your name",
    type: "text",
    icon: EnumIcons.userIcon,
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
  {
    name: "surname",
    placeholder: "Enter your surname",
    type: "text",
    icon: EnumIcons.userIcon,
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
  {
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    icon: EnumIcons.emailIcon,
  },
  {
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    icon: EnumIcons.passwordIcon,
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
  {
    name: "password",
    placeholder: "Confirm your password",
    type: "password",
    icon: EnumIcons.confirmIcon,
  },
];

export default config;
