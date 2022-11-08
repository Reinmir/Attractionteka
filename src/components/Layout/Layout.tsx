import React, { PropsWithChildren } from "react";
import "./style.scss";

interface LayoutProps extends PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <div className="layout__container">{children}</div>;
};
