import { Box, Flex, Heading, Link, List, ListItem, useDisclosure } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

import { Menu } from "../Menu";
import { MenuButton } from "../MenuButton/MenuButton";

export const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Flex
        as="header"
        bg="teal.500"
        color="gray.50"
        align="center"
        justifyContent="space-between"
        padding={{ base: "3", md: "5" }}
      >
        <Flex gap={{ base: "5", md: "8" }}>
          <Heading as="h1" fontSize={{ base: "md", md: "lg" }} _hover={{ cursor: "pointer" }}>
            <Link as={NextLink} href="/home/">
              User App
            </Link>
          </Heading>
          <Box as="nav" display={{ base: "none", md: "block" }}>
            <List display="flex" gap={{ base: "2", md: "4" }}>
              <ListItem>
                <Link as={NextLink} href="/userManagement/" fontSize="sm">
                  ユーザー一覧
                </Link>
              </ListItem>
              <ListItem>
                <Link as={NextLink} href="/setting/" fontSize="sm">
                  設定
                </Link>
              </ListItem>
            </List>
          </Box>
        </Flex>
        <MenuButton onOpen={onOpen} />
      </Flex>
      <Menu onClose={onClose} isOpen={isOpen} />
    </>
  );
};
