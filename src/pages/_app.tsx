import type { AppProps } from "next/app";
import "ress";

import "@/styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
