import { default as NextLink, LinkProps as NextLinkProps } from "next/link";
import { FC, ReactNode } from "react";

type LinkProps = NextLinkProps & {
  children?: ReactNode;
};
export const Link: FC<LinkProps> = ({ children, ...props }) => {
  return <NextLink {...props}>{children}</NextLink>;
};
