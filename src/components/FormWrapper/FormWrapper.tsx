import React, { PropsWithChildren } from "react";

import "./style.scss";

interface FormWrapperProps extends PropsWithChildren {
  title?: string;
  subtitle?: string;
  text?: string;
}

const FormWrapper: React.FC<FormWrapperProps> = ({
  subtitle,
  text,
  title,
  children,
}) => {
  return (
    <>
      <div className="formwrapper__wrapper">
        <h1 className="formwrapper__title">{title}</h1>
        <h2 className="formwrapper__subtitle">{subtitle}</h2>
        <h3 className="formwrapper__text">{text}</h3>
        {children}
      </div>
    </>
  );
};

export default FormWrapper;
