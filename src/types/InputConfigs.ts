import ConfigProps from "src/interfaces/config-props";

interface InputConfigsProps extends ConfigProps{
    value: string;
    validError: string | undefined;
}

export default InputConfigsProps