import '@/styles/globals.css'
import Head from "next/head";
import { useEffect } from "react";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    const importTE = async () => {
      (await import("tw-elements")).default;
    };
    importTE();
  }, []);
  <Head>
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
    />
    <link
      rel="stylesheet"
      href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
    />
  </Head>;
  <Script src="https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js" />;
  return <Component {...pageProps} />;
}
