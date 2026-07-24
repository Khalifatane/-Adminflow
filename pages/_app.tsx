import type { AppProps } from "next/app";
import { Poppins } from "next/font/google";
import { GlobalStyle } from "../styles/global";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"]
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.className}>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}
