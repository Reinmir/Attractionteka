import React from "react";
import { Route, Routes } from "react-router";
import { IRoute } from "src/interfaces/IRoute";

interface RoutePathProps {
  config: IRoute[];
}

export const RoutePath: React.FC<RoutePathProps> = ({ config }) => {
  return (
    <>
      <Routes>
        {config.map((item) => (
          <Route key={item.path} path={item.path} element={item.element} />
        ))}
        <Route path="*" element={<h1>Not Found</h1>}></Route>
      </Routes>
    </>
  );
};
