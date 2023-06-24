import { ReactNode } from "react";

import { Header } from "@/components/Elements/Header";

type Props = {
  children: ReactNode;
};

export const HeaderLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
