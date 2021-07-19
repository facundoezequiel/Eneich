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
import { EnglishContainer } from "./styled";

function EnglishPage() {
  return (
    <EnglishContainer>
      {/* Header */}
      <Header active="eng" linkeng="/english" linkesp="/" logolink="/" />
      {/* Introduction Section  */}
      <Introduction active="eng" />
      {/* News Section */}
      <News active="eng" />
      <div id="bioraphyPlatformsSection">
        <div id="fristElement">
          <Fade duration={2800}>
            <img src="images/elements/circle.svg" draggable="false" />
          </Fade>
        </div>
        {/* AboutMe Section */}
        <Fade duration={1800}>
          <AboutMe active="eng" link="/biography"/>
        </Fade>
        {/* Platforms Section */}
        <Fade duration={1800}>
          <Platforms active="eng" />
        </Fade>
      </div>
      {/* Video Section */}
      <Fade duration={1800}>
        <Video active="eng" />
      </Fade>
      {/* Contact Section */}
      <Contact />
      {/* News Section */}
      <News active="eng" />
      {/* Footer */}
      <Footer active="eng" linkeng="/english" linkesp="/" logolink="none" />
    </EnglishContainer>
  );
}

export default EnglishPage;