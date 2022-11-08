interface ValidationsProps {
  validName?: "minLength" | "maxLength" | "isEmail" | "isSame";
  validValue?: string | number | void;
}

export default ValidationsProps;
