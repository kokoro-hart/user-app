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
      </main>
    </>
  );
};

export default Home;
