import type { AppProps } from "next/app";
import { TableProvider } from "../contexts/TableContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TableProvider>
      <Component {...pageProps} />
    </TableProvider>
  );
}

export default MyApp;
