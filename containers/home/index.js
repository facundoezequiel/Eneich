import React from "react";
import Header from "../../components/header";
import Introduction from "../../components/introduction";
import News from "../../components/news";
import Biography from "../../components/biography";
import Platforms from "../../components/platforms";
import Fade from "react-reveal/Fade";
import { HomeContainer } from "./styled";

function Home() {
  return (
    <HomeContainer>
      {/* Header */}
      <Header />
      {/* Introduction Section */}
      <Introduction />
      {/* News Section */}
      <News />
      <div id="bioraphyPlatformsSection">
        {/* Biography Section */}
        <Fade duration={800}>
          <Biography />
        </Fade>
        {/* Platforms Section */}
        <Fade duration={800}>
          <Platforms />
        </Fade>
      </div>
    </HomeContainer>
  );
}

export default Home;
