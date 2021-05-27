import "../styles/globals.css";
import React from "react";
import Head from "next/head";
import "@fortawesome/fontawesome-svg-core/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Eneich</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <link
          rel="preload"
          href="/fonts/pangea/PangeaTextTrial-Light.woff"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/mtdalatsans/MTDalatSans.otf"
          as="font"
          crossOrigin=""
        />
        <meta property="og:site_name" content="Eneich"></meta>
        <meta property="og:title" content="Eneich" />
        <meta property="og:url" content="https://www.eneich.com/" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          itemprop="image"
          content="https://www.eneich.com/images/share.jpg"
        />
        <meta
          property="og:image:secure_url"
          itemprop="image"
          content="https://www.eneich.com/images/share.jpg"
        />
        <meta property="og:description" content="Eneich Landing Page" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
