import "../styles/globals.scss";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import { wrapper } from "../store/store";
import { Provider } from "react-redux";

const myFont = localFont({
  src: "../assets/fonts/Yekan.woff",
  variable: "--font-iranYekan",
});

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  return (
    <Provider store={store}>
      <main className={`${myFont.variable} font-sans`}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
};

export default App;
