import React from "react";
import EnumIcons from "src/interfaces/enumIcons";
import { errorIcon } from "../Input/inputIcons";

import "./style.scss";

interface ErrorBlockProps extends React.PropsWithChildren {}

const ErrorBlock: React.FC<ErrorBlockProps> = ({ children }) => {
  return (
    <div className="error__wrapper">
      <div className="error__icon">{errorIcon}</div>
      <p className="error__container">{children}</p>
    </div>
  );
};

export default ErrorBlock;
