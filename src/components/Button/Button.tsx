import React from "react";
import "./style.scss";

interface ButtonProps extends React.PropsWithChildren {

}

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <>
      <button className="customButton">{children}</button>
    </>
  );
};

export default Button;
