import React, { PropsWithChildren } from "react";
import { logoIcon } from "../Header/HeaderIcons";
import "./style.scss";

interface LayoutProps extends PropsWithChildren {}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      
      <div className="layout__container">
        <div className="logoIcon">{logoIcon}</div>
      {children}</div>;
    </>
  );
};
