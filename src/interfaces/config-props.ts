interface ConfigProps {
  name: string;
  placeholder: string;
  type: string;
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
