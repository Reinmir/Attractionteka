import React from "react";
import { LogoIcon } from "./HeaderIcons";
import "./style.scss";

export const Header: React.FC = () => {
  return (
    <div className="header__container">
      <div className="header__logoIcon">{LogoIcon}</div>
    </div>
  );
};
