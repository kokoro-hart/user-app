import Head from "next/head";
import { FC } from "react";

import { Login } from "@/features/Login";

const Home: FC = () => {
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Home Page" />
      </Head>

      <Login />
    </>
  );
};

export default Home;
