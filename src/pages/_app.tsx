import "../styles/globals.scss";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { Inter } from "@next/font/google";

// const myFont = localFont({ src: "./my-font.woff2" });
// const myFont = localFont({
//   src: "../assets/fonts/Yekan.woff",
// });

const myFont = localFont({
  src: "../assets/fonts/Yekan.woff",
  variable: "--font-iranYekan",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${myFont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
