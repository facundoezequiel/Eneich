import React from "react";
import Header from "../../components/header";
import Introduction from "../../components/introduction";
import News from "../../components/news";
import Biography from "../../components/biography";
import Platforms from "../../components/platforms";
import Video from "../../components/video";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
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
        <div id="fristElement">
          <img
            src="images/elements/circle.svg"
            draggable="false"
          />
        </div>
        {/* Biography Section */}
        <Fade duration={800}>
          <Biography />
        </Fade>
        {/* Platforms Section */}
        <Fade duration={800}>
          <Platforms />
        </Fade>
      </div>
      {/* Video Section */}
      <Fade duration={800}>
        <Video />
      </Fade>
      {/* Contact Section */}
      <Fade duration={800}>
        <Contact />
      </Fade>
      {/* News Section */}
      <News />
      {/* Footer */}
      <Footer />
    </HomeContainer>
  );
}

export default Home;
