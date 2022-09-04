import type { AppProps } from "next/app";
import GlobalStyle from "../components/GlobalStyle/GlobalSyle";
import Layout from "../components/Layout/Layout";
import "swiper/css";
import "swiper/css/pagination";
import "./../../styles/style.css";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
