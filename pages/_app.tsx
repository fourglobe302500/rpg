import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { useStore } from "../store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={useStore(pageProps.initialReduxState)}>
      <Component {...pageProps} />
    </Provider>
  );
}
