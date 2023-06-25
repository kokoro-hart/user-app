import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { LoginUserProvider } from "@/providers/LoginUserProvider";
import { theme } from "@/theme";

import "ress";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <LoginUserProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </LoginUserProvider>
  );
};

export default App;
