import React, { useState } from "react";
import { useNavigate } from "react-router";

import { PageRoutes } from "src/constants/routeNames";

import { LocalStorageKey } from "src/enums/localStorageEnum";

import { UseActions } from "src/hooks/useActions";
import { useAppDispatch } from "src/hooks/useAppDispatch";
import { Container } from "../Container/Container";

import { burgerMenuIcon, logoIcon, logOutIcon } from "./HeaderIcons";

import "./style.scss";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { removeUserData } = UseActions();

  const handleLogOut = () => {
    dispatch(removeUserData());
    navigate(PageRoutes.Login);
    localStorage.removeItem(LocalStorageKey.Auth);
  };

  return (
    <header className="header__container">
      <Container>
        <nav className="header__nav">
          <ul className="header__ulLogo">
            <li className="header__liLogo">
              <span className="header__logoIcon">{logoIcon}</span>
            </li>
          </ul>
          <ul className="header__ulIcons">
            <li className="header__liIcons">
              <button className="header__logout" onClick={handleLogOut}>
                {logOutIcon}
              </button>
              <button className="header__burgerMenu">{burgerMenuIcon}</button>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};
