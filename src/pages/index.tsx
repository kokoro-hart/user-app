import { Button } from "@chakra-ui/react";
import Head from "next/head";
import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Head>

      <main>
        <h1>Home Page</h1>
        <Button>ボタン</Button>
      </main>
    </>
  );
};

export default Home;
