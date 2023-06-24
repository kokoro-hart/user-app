import { Image } from "@chakra-ui/image";
import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import React from "react";
type CardProps = {
  imageUrl: string;
  userName: string;
  fullName: string;
};

export const Card = ({ imageUrl, userName, fullName }: CardProps) => {
  return (
    <Box
      w="260px"
      h="260px"
      bg="white"
      borderRadius="10px"
      shadow="md"
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8, transition: "0.3s" }}
    >
      <Stack textAlign="center">
        <Image boxSize="160px" borderRadius="full" src={imageUrl} alt={userName} m="auto" />
        <Heading as="h2" fontSize="lg" fontWeight="bold">
          {userName}
        </Heading>
        <Text fontSize="sm" color="gray">
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
};
