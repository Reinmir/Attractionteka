import React from "react";
import { logoIcon, logOutIcon } from "./HeaderIcons";
import "./style.scss";

export const Header: React.FC = () => {
  return (
    <div className="header__container">
      <div className="header__logoIcon">{logoIcon}</div>
      <div className="header__logout" onClick={(e)=>(e.target)}>{logOutIcon}</div>
    </div>
  );
};
