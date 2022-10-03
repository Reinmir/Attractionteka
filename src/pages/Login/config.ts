import configProps from "src/components/config-props";

const config: configProps[] = [
  {
    name: "Name",
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
    name: "Email",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    name: "Password",
    placeholder: "Enter your password",
    type: "password",
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
