import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/modal";
import { Stack } from "@chakra-ui/react";

import { User } from "@/types/api";

type ModalProps = {
  user: User | undefined;
  isOpen: boolean;
  onClose: () => void;
};

export const UserModal = ({ user, isOpen, onClose }: ModalProps) => {
  if (user === undefined) return <></>;
  const { username, name, email, phone } = user;
  return (
    <Modal isOpen={isOpen} onClose={onClose} motionPreset="slideInBottom">
      <ModalOverlay />
      <ModalContent p={6}>
        <ModalHeader>User Info</ModalHeader>
        <ModalBody mx={4}>
          <Stack spacing={4}>
            <FormControl>
              <FormLabel>名前</FormLabel>
              <Input value={username} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>フルネーム</FormLabel>
              <Input value={name} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>MAIL</FormLabel>
              <Input value={email} isReadOnly />
            </FormControl>
            <FormControl>
              <FormLabel>TEl</FormLabel>
              <Input value={phone} isReadOnly />
            </FormControl>
          </Stack>
        </ModalBody>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
};
