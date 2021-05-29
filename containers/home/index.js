import React from "react";
import Header from "../../components/header"
import Introduction from "../../components/introduction";
import News from "../../components/news"
import Biography from "../../components/biography";
import Fade from "react-reveal/Fade";
import { HomeContainer } from "./styled";

function Home() {
  return (
    <HomeContainer>
      {/* Header */}
      <Header/>
      {/* Introduction Section */}
      <Introduction/>
      {/* News Section */}
      <News/>
      {/* Biography Section */}
      <Fade duration={800}>
        <Biography/>
      </Fade>
    </HomeContainer>
  );
}

export default Home;
