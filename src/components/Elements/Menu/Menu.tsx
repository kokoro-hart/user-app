import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Link,
  Button,
  CloseButton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

type MenuProps = {
  onClose: () => void;
  isOpen: boolean;
};

export const Menu = ({ onClose, isOpen }: MenuProps) => {
  return (
    <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerBody p={0} bg="gray.100">
            <CloseButton display="block" ml="auto" onClick={onClose} size="lg" />
            <Button w="100%">
              <Link as={NextLink} href="/home/">
                TOP
              </Link>
            </Button>
            <Button w="100%">
              <Link as={NextLink} href="/userManagement/">
                ユーザー一覧
              </Link>
            </Button>
            <Button w="100%">
              <Link as={NextLink} href="/setting/">
                設定
              </Link>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};
