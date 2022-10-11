import { invisibleIcon, visibleIcon } from "src/components/Input/inputIcons";
import configProps from "src/interfaces/config-props";
import EnumIcons from "src/interfaces/enumIcons";

const config: configProps[] = [
  {
    name: "name",
    placeholder: "Enter your name",
    type: "text",
    leftIcon: EnumIcons.userIcon,
    // validations: [
    //   {
    //     name: "maxLength",
    //     validValue: 20,
    //   },
    //   {
    //     name: "minLength",
    //     validValue: 2,
    //   },
    // ],
  },
  {
    name: "surname",
    placeholder: "Enter your surname",
    type: "text",
    leftIcon: EnumIcons.userIcon,
    // validations: [
    //   {
    //     name: "maxLength",
    //     validValue: 20,
    //   },
    //   {
    //     name: "minLength",
    //     validValue: 2,
    //   },
    // ],
  },
  {
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    leftIcon: EnumIcons.emailIcon,
  },
  {
    name: "password",
    placeholder: "Enter your password",
    type: "password",
    leftIcon: EnumIcons.passwordIcon,
    rightIcon: visibleIcon || invisibleIcon,
    // validations: [
    //   {
    //     name: "maxLength",
    //     validValue: 20,
    //   },
    //   {
    //     name: "minLength",
    //     validValue: 2,
    //   },
    // ],
  },
  {
    name: "password",
    placeholder: "Confirm your password",
    type: "password",
    leftIcon: EnumIcons.confirmIcon,
    rightIcon: visibleIcon || invisibleIcon,
  },
];

export default config;
