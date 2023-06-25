import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalFooter,
} from "@chakra-ui/modal";
import { Stack } from "@chakra-ui/react";
import { useState, useEffect, ChangeEvent } from "react";

import { ButtonPrimary } from "@/components/Elements/Button";
import { User } from "@/types/api";

type ModalProps = {
  user: User | undefined;
  isOpen: boolean;
  isAdmin?: boolean;
  onClose: () => void;
};

export const UserModal = ({ user, isOpen, onClose, isAdmin = false }: ModalProps) => {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setUsername(user?.username ?? "");
    setName(user?.name ?? "");
    setEmail(user?.email ?? "");
    setPhone(user?.phone ?? "");
  }, [user]);

  const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
  const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

  const onClickUpdate = () => {
    alert("更新しました");
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent p={6}>
        <ModalHeader>User Info</ModalHeader>
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={username} onChange={onChangeUsername} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
            </FormControl>
            <FormControl>
              <FormLabel>TEl</FormLabel>
              <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
            </FormControl>
          </Stack>
        </ModalBody>
        {isAdmin && (
          <ModalFooter>
            <ButtonPrimary onClick={onClickUpdate}>更新</ButtonPrimary>
          </ModalFooter>
        )}
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
};
