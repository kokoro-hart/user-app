import { useState } from "react";

import { useMessage } from "@/features/Login/hooks";
import { axios } from "@/libs";
import { User } from "@/types/api";

export const useAllUsers = () => {
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();
  const [users, setUsers] = useState<Array<User>>([]);

  const get = (): Promise<Array<User>> => {
    return axios({});
  };

  const getUsers = () => {
    get()
      .then((res) => {
        setUsers(res);
      })
      .catch(() => {
        showMessage({ title: "ユーザーが見つかりませんでした。", status: "error" });
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return {
    getUsers,
    users,
    isLoading: loading,
  };
};
