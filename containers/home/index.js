import React from "react";
import Ticker from "react-ticker";
import Header from "../../components/header"
import { HomeContainer } from "./styled";

function Home() {
  return (
    <HomeContainer>
      {/* Header */}
      <Header></Header>
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
              <p>Overspeed - Eneich ft. Gandini. Live now on Spotify.</p>
            </>
          )}
        </Ticker>
      </div>
    </HomeContainer>
  );
}

export default Home;
