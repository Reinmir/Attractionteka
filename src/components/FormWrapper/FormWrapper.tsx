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
        <div className="formwrapper__semicircle"></div>
        <div className="formwrapper__textBlock">
          <h1 className="formwrapper__title">{title}</h1>
          <h2 className="formwrapper__subtitle">{subtitle}</h2>
          <h3 className="formwrapper__text">{text}</h3>
        </div>

        {children}
      </div>
    </>
  );
};

export default FormWrapper;
