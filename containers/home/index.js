import React from "react";
import Head from "next/head";
import Ticker from 'react-ticker'
import { HomeContainer } from "./styled";

function Home() {
  return (
    <HomeContainer>
      <Head>
        <link
          rel="preload"
          href="/fonts/pangea/PangeaTextTrial-Light.woff"
          as="font"
          crossOrigin=""
        />
      </Head>
      {/* Header */}
      <div id="header">
        <div>
          <img src="images/logos/eneich.svg" alt="Eneich Logo" />
        </div>
        <div>
          <Ticker mode="smooth" offset={0}>
            {({ index }) => (
              <>
              <div className="telepronterDiv">
                <p>17 de octubre EN VIVO - Aeroposta La Falda</p>
              </div>
              <div className="telepronterDiv">
                <p>Kali Mist - Gandini ft. Eneich. Live now on Spotify</p>
              </div>
            </>
            )}
          </Ticker>
        </div>
        <div id="shopDiv">
          <a>SHOP</a>
        </div>
      </div>
      {/* Introduction */}
      <div
        id="introduction"
        style={{
          backgroundImage: `url(${"/images/Background1920.jpg"})`,
        }}
      >
        Hola
      </div>
    </HomeContainer>
  );
}

export default Home;
