import React from "react";
import "./style.scss";

interface ButtonProps extends React.PropsWithChildren {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  className,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={onClick}
        className={`customButton ${className} `}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
