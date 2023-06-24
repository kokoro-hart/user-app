import { css } from "@emotion/react";
import React, { ComponentPropsWithoutRef, FC } from "react";

type ButtonProps = ComponentPropsWithoutRef<"button">;

const styles = css`
  border-radius: 4px;
  padding: 6px 12px;
  background-color: var(--color-primary);
  color: var(--color-white);
`;

export const Button: FC<ButtonProps> = ({ children, type = "button", ...props }) => {
  return (
    <button type={type} css={styles} {...props}>
      {children}
    </button>
  );
};
