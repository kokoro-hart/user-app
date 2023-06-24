import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";

type MenuButtonProps = {
  onOpen: () => void;
};

export const MenuButton = ({ onOpen }: MenuButtonProps) => {
  return (
    <IconButton
      icon={<HamburgerIcon />}
      aria-label="メニューボタン"
      size="sm"
      variant="unstyled"
      display={{ base: "block", md: "none" }}
      onClick={onOpen}
    />
  );
};
