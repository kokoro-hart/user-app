import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useEffect } from "react";

import { Card } from "@/features/Users/Card";
import { useAllUsers } from "@/features/Users/hooks";

export const Cards = () => {
  const { getUsers, users, isLoading } = useAllUsers();

  useEffect(() => getUsers(), []);
  return (
    <>
      {isLoading ? (
        <Center height="100vh">
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map(({ id, name, username }) => (
            <WrapItem key={id} mx={{ base: "auto", md: "0" }}>
              <Card
                imageUrl="https://source.unsplash.com/random"
                userName={username}
                fullName={name}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
    </>
  );
};
