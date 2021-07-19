import React from "react";
import Header from "../../components/header";
import Introduction from "../../components/introduction";
import News from "../../components/news";
import AboutMe from "../../components/aboutme";
import Platforms from "../../components/platforms";
import Video from "../../components/video";
import Contact from "../../components/contact";
import Footer from "../../components/footer";
import Fade from "react-reveal/Fade";
import { HomeContainer } from "./styled";

function Inicio() {
  return (
    <HomeContainer>
      {/* Header */}
      <Header active="esp" linkeng="/english" linkesp="/" logolink="/" />
      {/* Introduction Section  */}
      <Introduction active="esp" />
      {/* News Section */}
      <News active="esp" />
      <div id="bioraphyPlatformsSection">
        <div id="fristElement">
          <Fade duration={2800}>
            <img src="images/elements/circle.svg" draggable="false" />
          </Fade>
        </div>
        {/* AboutMe Section */}
        <Fade duration={1800}>
          <AboutMe active="esp" link="/biografia"/>
        </Fade>
        {/* Platforms Section */}
        <Fade duration={1800}>
          <Platforms active="esp" />
        </Fade>
      </div>
      {/* Video Section */}
      <Fade duration={1800}>
        <Video active="esp" />
      </Fade>
      {/* Contact Section */}
      <Contact />
      {/* News Section */}
      <News active="esp" />
      {/* Footer */}
      <Footer active="esp" linkeng="/english" linkesp="/" logolink="/" />
    </HomeContainer>
  );
}

export default Inicio;
