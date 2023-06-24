import { Button } from "@chakra-ui/react";
import { ReactNode } from "react";

type ButtonPrimaryProps = {
  children: ReactNode;
  isDisabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
};

export const ButtonPrimary = ({
  children,
  isDisabled = false,
  isLoading = false,
  onClick,
}: ButtonPrimaryProps) => {
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      isDisabled={isDisabled || isLoading}
      isLoading={isLoading}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
