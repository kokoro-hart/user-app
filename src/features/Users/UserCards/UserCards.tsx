import { useDisclosure } from "@chakra-ui/hooks";
import { Wrap, WrapItem } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { useEffect, useCallback } from "react";

import { useAllUsers } from "@/features/Users/hooks";
import { useLoginUser } from "@/features/Users/hooks";

import { useSelectUsers } from "../hooks/useSelectUsers";
import { UserModal } from "../Modal";
import { UserCard } from "../UserCard/UserCard";

export const UserCards = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { getUsers, users, isLoading } = useAllUsers();
  const { onSelectUser, selectedUsers } = useSelectUsers();
  const { loginUser } = useLoginUser();

  const onClickUser = useCallback(
    (id: number) => {
      onSelectUser({ id, users, onOpen });
    },
    [users, onSelectUser, onOpen],
  );

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
              <UserCard
                id={id}
                imageUrl="https://source.unsplash.com/random"
                userName={username}
                fullName={name}
                onClick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}

      <UserModal
        user={selectedUsers}
        isOpen={isOpen}
        onClose={onClose}
        isAdmin={loginUser?.isAdmin}
      />
    </>
  );
};
