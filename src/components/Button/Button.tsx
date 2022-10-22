import React from "react";
import "./style.scss";

interface ButtonProps extends React.PropsWithChildren {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
  type?: string
  
}

const Button: React.FC<ButtonProps> = ({ children, className,type, ...props }) => {
  return (
    <>
      <button {...props} className={`customButton ${className}`}>
        {children}
      </button>
    </>
  );
};

export default Button;
