import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

import { theme } from "@/theme";

import "ress";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
