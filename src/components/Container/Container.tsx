import React, { PropsWithChildren } from "react";
import "./style.scss";

export const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="container__layout">{children}</div>;
};
