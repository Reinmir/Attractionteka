import React, { useEffect } from "react";

import { PageRoutes } from "src/constants/routeNames";
import { LocalStorageKey } from "src/enums/localStorageEnum";

import { UseActions } from "src/hooks/useActions";
import { useAppSelector } from "src/hooks/useAppSelector";

import { IRoute } from "src/interfaces/IRoute";

import Login from "src/pages/Login/Login";
import MainPage from "src/pages/MainPage/MainPage";
import Registration from "src/pages/Registration/Registration";

import { RoutePath } from "../RoutePath/RoutePath";

import "./App.css";

const App = () => {
  const { isAuth } = useAppSelector((state) => state.user);
  const { setUserData } = UseActions();

  useEffect(() => {
    const User = localStorage.getItem(LocalStorageKey.authKey);
    if (User) {
      setUserData(JSON.parse(User));
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
  ];

  return (
    <>
      <RoutePath config={!isAuth ? anonRoutes : authRoutes} />
    </>
  );
};

export default App;
