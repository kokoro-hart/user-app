import React, { ComponentPropsWithoutRef, FC } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

export const Button: FC<ButtonProps> = ({ children, type = "button", ...props }) => {
  return (
    <button type={type} {...props}>
      {children}
    </button>
  );
};
