import "@/styles/globals.css";
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
    <title>property</title>

    <meta charset="UTF-8" />
    <meta name="description" content="property rental site" />
    <meta
      name="keywords"
      content="This website is made used by html css tailwind and nextjs"
    />
    <meta name="meerako" content="we are meerakians" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

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
