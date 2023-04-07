import '@/styles/globals.css'
import Head from "next/head";

export default function App({ Component, pageProps }) {
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
  return <Component {...pageProps} />;
}
