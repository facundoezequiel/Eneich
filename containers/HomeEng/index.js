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
import { HomeContainer } from "../Home/styled";

function Homeeng() {
  return (
    <HomeContainer>
      {/* Header */}
      <Header active="eng" linkeng="/home" linkesp="/" logolink="/home" />
      {/* Introduction Section  */}
      <Introduction />
      {/* News Section */}
      <News />
      <div id="bioraphyPlatformsSection">
        <div id="fristElement">
          <Fade duration={2800}>
            <img src="images/elements/circle.svg" draggable="false" />
          </Fade>
        </div>
        {/* AboutMe Section */}
        <Fade duration={1800}>
          <AboutMe />
        </Fade>
        {/* Platforms Section */}
        <Fade duration={1800}>
          <Platforms />
        </Fade>
      </div>
      {/* Video Section */}
      <Fade duration={1800}>
        <Video />
      </Fade>
      {/* Contact Section */}
      <Contact />
      {/* News Section */}
      <News />
      {/* Footer */}
      <Footer active="eng" linkeng="/home" linkesp="/" logolink="/home" />
    </HomeContainer>
  );
}

export default Homeeng;
