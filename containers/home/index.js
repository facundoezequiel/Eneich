import React from "react";
import Head from "next/head";
import Ticker from "react-ticker";
import { HomeContainer } from "./styled";

function Home() {
  return (
    <HomeContainer>
      <Head>
        <title>Eneich</title>
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
      </Head>
      {/* Header
      <div id="header">
        <div>
          <img src="images/logos/eneich.svg" alt="Eneich Logo" />
        </div>
        <div id="shopDiv">
          <a>SHOP</a>
        </div>
      </div> */}
      {/* Introduction */}
      <div
        id="introduction"
        style={{
          backgroundImage: `url(${"/images/Background1920.jpg"})`,
        }}
      >
        <div id="introductionDivH1">
          <h1>House Music DJ and Producer</h1>
        </div>
      </div>
      {/* News */}
      <div id="news">
        <Ticker>
          {({ index }) => (
            <>
              <p>Kali Mist - Gandini ft. Eneich. Live now on Spotify.</p>
            </>
          )}
        </Ticker>
      </div>
    </HomeContainer>
  );
}

export default Home;
