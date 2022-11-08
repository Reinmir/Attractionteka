import { invisibleIcon, visibleIcon } from "src/components/Input/inputIcons";
import configProps from "src/interfaces/config-props";

import EnumIcons from "src/enums/enumIcons";

const config: configProps[] = [
  {
    name: "name",
    placeholder: "Enter your name",
    type: "text",
    leftIcon: EnumIcons.userIcon,
    validations: [
      {
        validName: "maxLength",
        validValue: 20,
      },
      {
        validName: "minLength",
        validValue: 2,
      },
    ],
  },
  {
    name: "surname",
    placeholder: "Enter your surname",
    type: "text",
    leftIcon: EnumIcons.userIcon,
    validations: [
      {
        validName: "maxLength",
        validValue: 20,
      },
      {
        validName: "minLength",
        validValue: 2,
      },
    ],
  },
  {
    name: "email",
    placeholder: "Enter your email",
    type: "email",
    leftIcon: EnumIcons.emailIcon,
    validations:[
    {
      validName: 'isEmail',
    }
    ]
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
  {
    name: "confirm_password",
    placeholder: "Confirm your password",
    type: "password",
    leftIcon: EnumIcons.confirmIcon,
    rightIcon: visibleIcon || invisibleIcon,
    validations: [
      {
        validName: "isSame",
        validValue: "password",
      },
    ],
  },
];

export default config;
