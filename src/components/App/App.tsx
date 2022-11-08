import React, { useEffect } from "react";

import { PageRoutes } from "src/constants/routeNames";
import { LocalStorageKey } from "src/enums/localStorageEnum";

import { UseActions } from "src/hooks/useActions";
import { useAppSelector } from "src/hooks/useAppSelector";

import { IRoute } from "src/interfaces/IRoute";
import ForgotPassword from "src/pages/ForgotPassword/ForgotPassword";

import Login from "src/pages/Login/Login";
import MainPage from "src/pages/MainPage/MainPage";
import Registration from "src/pages/Registration/Registration";

import { RoutePath } from "../RoutePath/RoutePath";

import "./App.css";

const App = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const { setUserData } = UseActions();

  useEffect(() => {
    const user = localStorage.getItem(LocalStorageKey.Auth);
    if (user) {
      setUserData(JSON.parse(user));
    }
  }, []);

  const authRoutes: IRoute[] = [
    {
      path: PageRoutes.MainPage,
      element: <MainPage />,
    },
  ];

  const anonRoutes: IRoute[] = [
    {
      path: PageRoutes.Login,
      element: <Login />,
    },
    {
      path: PageRoutes.Registration,
      element: <Registration />,
    },
    {
      path: PageRoutes.ForgotPassword,
      element: <ForgotPassword/>
    }
  ];

  return (
    <>
      <RoutePath config={!isAuth ? anonRoutes : authRoutes} />
    </>
  );
};

export default App;
