import { useState, useCallback } from "react";

import { User } from "@/types/api";
type Props = {
  id: number;
  users: Array<User>;
  onOpen: () => void;
};

export const useSelectUsers = () => {
  const [selectedUsers, setSelectedUsers] = useState<User | undefined>();
  const onSelectUser = useCallback(({ id, users, onOpen }: Props) => {
    const selectUser = users.find((user: User) => user.id === id);
    setSelectedUsers(selectUser);
    onOpen();
  }, []);

  return { onSelectUser, selectedUsers };
};
