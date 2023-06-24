import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react";
import Head from "next/head";
import { ChangeEvent, FC, useState } from "react";

import { ButtonPrimary } from "@/components/Elements/Button";
import { useLogin } from "@/hooks/useLogin";

const Home: FC = () => {
  const [userId, setUserId] = useState("");
  const { login, isLoading } = useLogin();
  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
  const onClickLogin = () => login(userId);

  console.log(isLoading);

  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Head>

      <Flex align="center" justify="center" height="100vh">
        <Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
          <Heading as="h1" size="lg" textAlign="center">
            User App
          </Heading>
          <Divider mt={4} />
          <Stack spacing={4} pt={4} px={10}>
            <Input placeholder="ユーザーID" value={userId} onChange={onChangeUserId} />
            <ButtonPrimary onClick={onClickLogin} isLoading={isLoading} isDisabled={userId === ""}>
              ログイン
            </ButtonPrimary>
          </Stack>
        </Box>
      </Flex>
    </>
  );
};

export default Home;
