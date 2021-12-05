import "../styles/normalize.css";
import "../styles/variables.css";
import "../styles/global.css";

import type { AppProps } from "next/app";
import { FC } from "react";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
