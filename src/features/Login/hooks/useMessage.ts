import { useToast } from "@chakra-ui/toast";

export const useMessage = () => {
  const toast = useToast();

  type ToastProps = {
    title: string;
    status: "info" | "warning" | "success" | "error";
  };

  const showMessage = ({ title, status }: ToastProps) => {
    toast({
      position: "top",
      duration: 2000,
      isClosable: true,
      title,
      status,
    });
  };

  return {
    showMessage,
  };
};
