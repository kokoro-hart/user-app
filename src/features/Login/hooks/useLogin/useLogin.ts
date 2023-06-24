import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { axios } from "@/libs";
import { User } from "@/types/api";

import { useMessage } from "../useMessage";

export const useLogin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { showMessage } = useMessage();

  useEffect(() => {
    router.prefetch("/home/");
  });

  const getUser = (id: string): Promise<User> => {
    const option = {
      url: `${id}`,
    };
    return axios(option);
  };

  const login = (id: string) => {
    setLoading(true);

    getUser(id)
      .then((res) => {
        if (res) {
          router.push("/home/");
          showMessage({ title: "ログインしました。", status: "success" });
        } else {
          showMessage({ title: "ユーザーが見つかりませんでした。", status: "error" });
        }
      })
      .catch(() => showMessage({ title: "ユーザーが見つかりませんでした。", status: "error" }))
      .finally(() => setLoading(false));
  };

  return {
    login,
    isLoading: loading,
  };
};
