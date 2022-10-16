import React from "react";
import "./style.scss";

interface ButtonProps extends React.PropsWithChildren {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <>
      <button {...props}>{children}</button>
    </>
  );
};

export default Button;
