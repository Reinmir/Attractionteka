import React from "react";

import { errorIcon } from "../Input/inputIcons";

import "./style.scss";

interface ErrorBlockProps extends React.PropsWithChildren {
  className?: string;
  iconClassName?: string;
}

const ErrorBlock: React.FC<ErrorBlockProps> = ({
  children,
  className,
  iconClassName,
}) => {
  return (
    <div className={`${className} error__wrapper`}>
      <div className={`${iconClassName} error__icon`}>{errorIcon}</div>
      <p className="error__container">{children}</p>
    </div>
  );
};

export default ErrorBlock;
