import configProps from "src/interfaces/config-props";
import EnumIcons from "src/interfaces/enumIcons";

const config: configProps[] = [
  {
    name: "Email",
    placeholder: "Enter your email",
    type: "email",
    icon: EnumIcons.emailIcon,
  },
  {
    name: "Password",
    placeholder: "Enter your password",
    type: "password",
    icon: EnumIcons.passwordIcon,
    validations: [
      {
        name: "maxLength",
        validValue: 10,
      },
      {
        name: "minLength",
        validValue: 2,
      },
    ],
  },
];

export default config;
