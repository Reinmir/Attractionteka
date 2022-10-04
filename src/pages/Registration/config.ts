import configProps from "src/interfaces/config-props";

const config: configProps[] = [
  {
    name: "name",
    placeholder: "Enter your name",
    type: "text",
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
  },
  {
    name: "password",
    placeholder: "Enter your password",
    type: "password",
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
  }
];

export default config;
